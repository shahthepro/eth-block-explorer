import * as React from 'react';
import withWallet from 'src/components/withWallet';
import { IWalletState } from 'src/types';
import { BlockHeader } from 'web3-eth/types';

interface IMainPageProps {
  wallet: IWalletState
}

class MainPage extends React.Component {
  render() {
    const { wallet } = this.props as IMainPageProps;

    return (
      <div>
        <button onClick={wallet.connect} disabled={wallet.isConnected} aria-busy={wallet.isConnected && wallet.loading}>Connect</button>
        <button onClick={wallet.disconnect} disabled={!wallet.isConnected} aria-busy={!wallet.isConnected && wallet.loading}>Disconnect</button>
        {
          wallet.isConnected && (
            <div>
              <ul>
                {
                  (wallet.latestBlocks! as BlockHeader[]).map((block) => <li key={block.number}>{ block.number }</li>)
                }
              </ul>
            </div>
          )
        }
      </div>
    );
  }
}

export default withWallet(MainPage);