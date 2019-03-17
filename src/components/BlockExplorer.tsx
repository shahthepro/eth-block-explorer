import * as React from 'react';
import withWallet from 'src/components/withWallet';
import { IWalletState, IBlock } from 'src/types';
import MasterDetailView from 'src/components/MasterDetailView';
import BlocksListView from './BlocksListView';
import BlockDetailView from './BlockDetailView';
import ConnectWallet from './ConnectWallet';

interface IBlockExplorerProps {
  wallet: IWalletState
}

class BlockExplorer extends React.Component<IBlockExplorerProps> {
  state = {
    selectedItem: null
  }

  onBlockSelected = (block: IBlock, _: any) => {
    this.setState({
      selectedItem: block
    });
  }

  onDisconnect = () => {
    this.setState({
      selectedItem: null,
    });
  }

  render() {
    const { wallet } = this.props;
    const { selectedItem } = this.state;

    const walletToPassdown: IWalletState = {
      ...wallet,
      disconnect: () => {
        // Cleanup on disconnect
        this.onDisconnect();
        wallet.disconnect();
      }
    };

    return (
      <MasterDetailView
        masterOpen={wallet.isConnected}

        masterSlot={
          <BlocksListView 
            blocks={wallet.latestBlocks!} 
            loading={wallet.isBlocksLoading} 
            onItemClick={this.onBlockSelected}
            header="Recent Blocks" />
        }

        detailSlot={
          <ConnectWallet wallet={walletToPassdown}>
            {
              selectedItem && (
                <BlockDetailView 
                  key={(selectedItem! as IBlock).number.valueOf()}
                  block={selectedItem!} 
                  wallet={walletToPassdown} />
              )
            }
          </ConnectWallet>
        }
      />
    );
  }
}

export default withWallet(BlockExplorer);