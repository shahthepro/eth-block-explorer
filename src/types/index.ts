import Web3 from 'web3';
import { Observable } from 'rxjs';

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

  latestBlocks?: any[],
};

export interface IBlockSubscriptionResponse {
  stream: Observable<any>,
  unsubscribe(): void
}