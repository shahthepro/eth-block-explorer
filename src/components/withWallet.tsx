import * as React from 'react';
// import Web3 from 'web3';
import { IWalletState } from '../types';
import connectToMetaMask from '../lib/connectToMetaMask';

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
          ...connectedWallet
        });
      } catch (err) {
        // Something went wrong :(
        this.setState({
          loading: false,
          lastConnectionError: err.message,
        });
      }
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
        networkId: null
      });
    }

    render() {
      return <WrappedComponent wallet={this.state} {...this.props} />;
    }
  }
}


export default withWallet;