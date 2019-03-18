jest.mock('web3', () => {
  const fakeWeb3 = () => {
    return {
      eth: {
        net: {
          getId: () => {
            return new Promise((resolve => {
              resolve(1012);
            }));
          }
        },
        getAccounts: () => {
          return new Promise(resolve => {
            resolve(['0x0123456789abcdef']);
          });
        }
      }
    };
  }
  
  fakeWeb3.givenProvider = 'hello';

  return {
    __esModule: true,
    default: fakeWeb3,
    // givenProvider: 'hello',
  };
});

import connectToMetaMask from '../lib/connectToMetaMask';

it('should connect to software wallet', async () => {
  const wallet = await connectToMetaMask();

  expect(wallet.address).toBe('0x0123456789abcdef');
  expect(wallet.networkId).toBe(1012);
});