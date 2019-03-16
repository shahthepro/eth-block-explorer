import Web3 from 'web3';
// import { Observable, of } from 'rxjs';
// import { filter } from 'rxjs/operators';

/**
 * Returns ether transfer transaction, ignoring smart contract creation and invocation transactions.
 * @param blockNumber block number whose transactions has to be fetched
 * @param web3 web3 instance
 */
const getEtherTransactions = async (blockNumber: Number, web3: Web3) => {
  const block = await web3.eth.getBlock(blockNumber as number, true);
  
  // For ether transfers the `data` field will be empty

  // // All transactions will be returned in one-call, So RxJS doesn't make sense in this context
  // const observable = of(...block.transactions)
  //   .pipe(
  //     filter(tx => !tx.data),
  //   )
  //   .toPromise()

  // A simple filter will do
  return block.transactions.filter(tx => !tx.data);
}

export default getEtherTransactions;