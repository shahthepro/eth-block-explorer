import Web3 from 'web3';

export interface IWalletConnectedResponse {
  address: String,
  networkId: Number,
  web3(): Web3,
}

export interface IWalletState {
  isConnected: boolean,
  loading: boolean,
  connect(): void,
  disconnect(): void,

  lastConnectionError: String,

  address?: String,
  networkId?: Number,
  web3?(): Web3,

  // latestBlocks?: []
};
