import { Observable } from 'rxjs';
import { Subscribe } from 'web3/types';
// @ts-ignore
import Web3 from 'web3';

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

  getTransactionsFromBlock?(blockNumber: number): Promise<ITransaction[]>,
};

export interface IBlock {
  number: Number,
  hash: String,
  gasUsed: Number,
  timestamp: Number,
  miner: String,
  gasLimit: Number,
  // difficulty: Number,
}

export interface ITransaction {
  nonce: string|number,
  gasPrice: string|number,
  gas: string|number,
  from: string,
  to: string,
  value: string|number,
  input: string,
  v?: string,
  r?: string,
  s?: string,
  hash: string,
  data?: string
}

export interface IBlockSubscriptionResponse {
  stream: Observable<IBlock[]>,
  unsubscribe(): void
}

export interface IBlockHeaderSubscriptionResponse {
  stream: Observable<IBlock>,
  subscription: Subscribe<IBlock>
}