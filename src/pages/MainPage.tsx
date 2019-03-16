import * as React from 'react';
import withWallet from 'src/components/withWallet';
import { IWalletState } from 'src/types';

interface IMainPageProps {
  wallet: IWalletState
}

class MainPage extends React.Component {
  render() {
    console.log(this.state, this.props);
    const { wallet } = this.props as IMainPageProps;

    return (
      <div>
        <button onClick={wallet.connect} disabled={wallet.isConnected}>Connect</button>
        <button onClick={wallet.disconnect} disabled={!wallet.isConnected}>Disconnect</button>
      </div>
    );
  }
}

export default withWallet(MainPage);