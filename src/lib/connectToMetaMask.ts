import Web3 from 'web3';
import { IWalletConnectedResponse } from './../types';

/**
 * Connects with any software wallet that has injected a web3 provider
 */
const connectToMetaMask = async (): Promise<IWalletConnectedResponse> => {
  let provider = Web3.givenProvider;

  if (process.env.REACT_APP_WS_PROVIDER) {
    new Web3.providers.WebsocketProvider(process.env.REACT_APP_WS_PROVIDER);
  }

  const web3 = new Web3(provider);
  
  const networkId = await web3.eth.net.getId();

  const [address] = await web3.eth.getAccounts(); 

  if (!address) {
    throw new Error(`You don't have any unlocked accounts in your software wallet. Check and try again`);
  }

  return {
    address,
    networkId,
    web3: () => web3
  };
};

export default connectToMetaMask;