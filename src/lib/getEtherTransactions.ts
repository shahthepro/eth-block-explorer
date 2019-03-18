import Web3 from 'web3';
import { ITransaction } from './../types';
// import { Observable, of } from 'rxjs';
// import { filter } from 'rxjs/operators';

/**
 * Returns ether transfer transaction, ignoring smart contract creation and invocation transactions.
 * @param blockNumber block number whose transactions has to be fetched
 * @param web3 web3 instance
 */
const getEtherTransactions = async (blockNumber: Number, web3: Web3): Promise<ITransaction[]> => {
  const block = await web3.eth.getBlock(blockNumber as number, true);
  
  // For ether transfers the `data` field will be empty and gas will be 21000

  // // All transactions will be returned in one-call, So RxJS doesn't make sense in this context
  // const observable = of(...block.transactions)
  //   .pipe(
  //     filter(tx => tx.gas === 21000),
  //   )
  //   .toPromise()

  // A simple filter will do
  return block.transactions
    .filter((tx: ITransaction) => {
      if (tx.value === undefined || parseFloat(tx.value!.toString()) === 0) {
        // No ether sent
        return false;
      }

      if (tx.input !== undefined) {
        // If no data is present, So ether only transaction, if gas is 21000
        return tx.input === '0x' && tx.gas === 21000;
      }

      return tx.gas === 21000;
    })
    .map(tx => {
      return {
        ...tx,
        // Convert wei to ether/gwei
        gasPrice: web3.utils.fromWei(tx.gasPrice!, 'gwei'), 
        value: web3.utils.fromWei(tx.value!.toString(), 'ether'), 
      }
    })
}

export default getEtherTransactions;