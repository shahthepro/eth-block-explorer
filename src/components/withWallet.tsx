import * as React from 'react';
// import Web3 from 'web3';
import { IWalletState } from '../types';
import connectToMetaMask from '../lib/connectToMetaMask';
import subscribeToBlocks from 'src/lib/subscribeToBlocks';
import getEtherTransactions from 'src/lib/getEtherTransactions';

/**
 * HOC for interacting with web3/software wallet
 */
function withWallet(WrappedComponent: any) {
  return class extends React.Component {
    state: IWalletState = {
      isConnected: false,
      connect: () => this.connectWallet(),
      disconnect: () => this.disconnectWallet(),
      
      isConnecting: false,
      lastConnectionError: '',

      isBlocksLoading: false,
    }

    startBlockSubscription = async () => {
      if (!this.state.isConnected) {
        return;
      }

      this.setState({
        isBlocksLoading: true
      });

      const { stream, unsubscribe } = (await subscribeToBlocks(this.state.web3!()));
      
      // Subscribe to block stream
      stream.subscribe({
        next: (latestBlocks: any) => {
          this.setState({
            isBlocksLoading: false, /* Disable loading after first block has been loaded */
            latestBlocks
          })
        }
      })

      this.setState({
        disconnect: () => {
          // Unsubscribe from stream before disconnecting wallet
          unsubscribe();
          this.disconnectWallet();
        }
      })
    }

    connectWallet = async () => {
      if (this.state.isConnected) {
        // Already connected
        return;
      }

      this.setState({
        isConnecting: true,
        lastConnectionError: ''
      });

      try {
        const connectedWallet = await connectToMetaMask();

        // Everything is successful
        this.setState({
          isConnected: true,
          isConnecting: false,
          lastConnectionError: '',
          latestBlocks: [],
          getTransactionsFromBlock: (blockNumber: number) => {
            return getEtherTransactions(blockNumber, connectedWallet.web3());
          },
          ...connectedWallet
        });
      } catch (err) {
        // Something went wrong :(
        this.setState({
          isConnecting: false,
          lastConnectionError: err.message,
        });
      }

      // Get recent blocks and subscribe to new blocks
      this.startBlockSubscription();
    }

    disconnectWallet = () => {
      if (!this.state.isConnected) {
        return;
      }

      // Reset state
      this.setState({
        isConnected: false,
        isConnecting: false,
        lastConnectionError: '',
        wallet: null,
        address: null,
        networkId: null,
        web3: null,
        latestBlocks: [],
        getTransactionsFromBlock: null,
        disconnect: () => this.disconnectWallet(),
      });
    }

    render() {
      return <WrappedComponent wallet={this.state} {...this.props} />;
    }
  }
}


export default withWallet;