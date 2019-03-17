import * as React from 'react';
import withWallet from 'src/components/withWallet';
import { IWalletState, IBlock } from 'src/types';
import MasterDetailView from 'src/components/MasterDetailView';

interface IBlockExplorerProps {
  wallet: IWalletState
}

class BlockExplorer extends React.Component {
  render() {
    const { wallet } = this.props as IBlockExplorerProps;

    return (
      <MasterDetailView
        masterOpen={wallet.isConnected}
        masterSlot={
          <div>
            {
              wallet.isConnected && wallet.isBlocksLoading && (
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
        }
        detailSlot={
          <div>
            {
              wallet.isConnected && <div>{wallet.address}</div>
            }
            <button onClick={wallet.connect} disabled={wallet.isConnected} aria-busy={wallet.isConnected && wallet.isConnecting}>Connect</button>
            <button onClick={wallet.disconnect} disabled={!wallet.isConnected && !wallet.isConnecting}>Disconnect</button>
          </div>
        }
      />
    );
  }
}

export default withWallet(BlockExplorer);