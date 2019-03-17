import * as React from 'react';
import withWallet from 'src/components/withWallet';
import { IWalletState } from 'src/types';
import MasterDetailView from 'src/components/MasterDetailView';
import BlocksListView from './BlocksListView';

interface IBlockExplorerProps {
  wallet: IWalletState
}

class BlockExplorer extends React.Component {
  render() {
    const { wallet } = this.props as IBlockExplorerProps;

    return (
      <MasterDetailView
        masterOpen={wallet.isConnected}
        masterSlot={ <BlocksListView 
          blocks={wallet.latestBlocks!} 
          loading={wallet.isBlocksLoading} 
          onItemClick={ (block, e) => console.log(block) }
          header="Recent Blocks" /> }
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