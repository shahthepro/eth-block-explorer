import Web3 from 'web3';
import { Observable } from 'rxjs';
import { Subscribe, BlockHeader } from 'web3-eth/types';

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

  latestBlocks?: BlockHeader[],
};

export interface IBlockSubscriptionResponse {
  stream: Observable<BlockHeader[]>,
  unsubscribe(): void
}

export interface IBlockHeaderSubscriptionResponse {
  stream: Observable<BlockHeader>,
  subscription: Subscribe<BlockHeader>
}