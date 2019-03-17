import Web3 from 'web3';
import 'typeface-roboto';
import { Observable } from 'rxjs';
import { Subscribe } from 'web3-eth/types';
import { Transaction } from 'web3-core/types';

export interface IWalletConnectedResponse {
  address: String,
  networkId: Number,
  web3(): Web3,
}

export interface IWalletState {
  isConnected: boolean,
  isConnecting: boolean,
  connect(): void,
  disconnect(): void,

  lastConnectionError: String,

  address?: String,
  networkId?: Number,
  web3?(): Web3,

  isBlocksLoading: boolean,
  latestBlocks?: IBlock[],

  getTransactionsFromBlock?(blockNumber: number): Promise<Transaction[]>,
};

export interface IBlock {
  number: Number,
  hash: String,
  gasUsed: Number,
  timestamp: Number,
}

export interface IBlockSubscriptionResponse {
  stream: Observable<IBlock[]>,
  unsubscribe(): void
}

export interface IBlockHeaderSubscriptionResponse {
  stream: Observable<IBlock>,
  subscription: Subscribe<IBlock>
}