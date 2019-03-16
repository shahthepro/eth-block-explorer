import * as React from 'react';
import withWallet from 'src/components/withWallet';
import { IWalletState, IBlock } from 'src/types';

interface IMainPageProps {
  wallet: IWalletState
}

class MainPage extends React.Component {
  render() {
    const { wallet } = this.props as IMainPageProps;

    return (
      <div>
        <button onClick={wallet.connect} disabled={wallet.isConnected} aria-busy={wallet.isConnected && wallet.isConnecting}>Connect</button>
        <button onClick={wallet.disconnect} disabled={!wallet.isConnected}>Disconnect</button>
        {
          wallet.isBlocksLoading && (
            <div>Loading blocks...</div>
          )
        }
        {
          wallet.isConnected && !wallet.isBlocksLoading && (
            <div>
              <h3>Recent Blocks</h3>
              <ul>
                {
                  (wallet.latestBlocks! as IBlock[]).map((block) => (
                    <li 
                      key={block.number.toString()}
                      onClick={async () => { console.log(await wallet.getTransactionsFromBlock!(block.number as number))}}
                    >{ block.number }</li>
                  ))
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