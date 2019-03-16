import Web3 from 'web3';
import { IWalletConnectedResponse } from 'src/types';

const connectToMetaMask = async (): Promise<IWalletConnectedResponse> => {
  const provider = Web3.givenProvider;

  if (!provider) {
    throw new Error(`Connect Wallet: Cannot find any web3 provider. Is your software wallet up and running?`);
  }

  const web3 = new Web3(provider);
  
  const networkId = await web3.eth.net.getId();

  const [address] = await web3.eth.getAccounts(); 

  if (!address) {
    throw new Error(`You don't have any accounts in your software wallet. Check and try again`);
  }

  return {
    address,
    networkId,
    web3: () => web3
  };

};

export default connectToMetaMask;