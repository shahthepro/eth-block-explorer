jest.mock('web3', () => ({}));


import getEtherTransactions from "../lib/getEtherTransactions";

it('should get ether transaction from a block', async () => {
  const fakeWeb3 = () => {
    return {
      eth: {
        getBlock: (blockNumber: number, transactions: boolean) => {
          return new Promise(resolve => {
            resolve({
              transactions: [
                { input: '0x', gas: 21000, gasPrice: '1000000000', value: '10000000000000000000' },
                { input: '0x', gas: 21000, gasPrice: '8000000000', value: '500000000000000000' },
                { input: '0x1234', gas: 21000, gasPrice: '8000000000', value: '500000000000000000' },
                { input: '0x', gas: 21000, gasPrice: '8000000000', value: '0' },
                { input: '0x', gas: 2000, gasPrice: '1000000000', value: '10000000000000000000' },
              ]
            })
          })
        }
      },
      utils: {
        // @ts-ignore
        fromWei: (x, units) => x
      }
    };
  }

  // @ts-ignore
  const transactions = await getEtherTransactions(123, fakeWeb3());

  expect(transactions).toMatchObject([
    { input: '0x', gas: 21000, gasPrice: '1000000000', value: '10000000000000000000' },
    { input: '0x', gas: 21000, gasPrice: '8000000000', value: '500000000000000000' }
  ]);
});