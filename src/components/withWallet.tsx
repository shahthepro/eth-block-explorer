import * as React from 'react';
// import Web3 from 'web3';
import { IWalletState } from '../types';
import connectToMetaMask from '../lib/connectToMetaMask';
import subscribeToBlocks from 'src/lib/subscribeToBlocks';

/**
 * HOC for interacting with web3/software wallet
 */
function withWallet(WrappedComponent: any) {
  return class extends React.Component {
    state: IWalletState = {
      isConnected: false,
      connect: () => this.connectWallet(),
      disconnect: () => this.disconnectWallet(),
      
      loading: false,
      lastConnectionError: ''
    }

    startBlockSubscription() {
      if (!this.state.isConnected) {
        return;
      }

      const { stream, unsubscribe } = subscribeToBlocks(this.state.web3!());
      
      // Subscribe to block stream
      stream.subscribe({
        next: (latestBlocks: any) => {
          this.setState({
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
        loading: true,
        lastConnectionError: ''
      });

      try {
        const connectedWallet = await connectToMetaMask();

        // Everything is successful
        this.setState({
          isConnected: true,
          loading: false,
          lastConnectionError: '',
          latestBlocks: [],
          ...connectedWallet
        });
      } catch (err) {
        // Something went wrong :(
        this.setState({
          loading: false,
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
        loading: false,
        lastConnectionError: '',
        wallet: null,
        address: null,
        networkId: null,
        web3: null,
        latestBlocks: [],
        disconnect: () => this.disconnectWallet(),
      });
    }

    render() {
      return <WrappedComponent wallet={this.state} {...this.props} />;
    }
  }
}


export default withWallet;