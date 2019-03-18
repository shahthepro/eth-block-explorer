import * as React from 'react';
import withWallet from './withWallet';
import { IWalletState, IBlock } from './../types';
import MasterDetailView from './MasterDetailView';
import BlocksListView from './BlocksListView';
import BlockDetailView from './BlockDetailView';
import ConnectWallet from './ConnectWallet';
import MyWallet from './MyWallet';

interface IBlockExplorerProps {
  wallet: IWalletState
}

interface IBlockExplorerState {
  selectedItem?: IBlock
}

class BlockExplorer extends React.Component<IBlockExplorerProps, IBlockExplorerState> {
  state = {
    selectedItem: undefined
  }

  onBlockSelected = (block: IBlock, _: any) => {
    this.setState({
      selectedItem: block
    });
  }

  onDisconnect = () => {
    this.resetSelectedItem();
  }

  resetSelectedItem = () => {
    this.setState({
      selectedItem: undefined
    });
  };

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
        autoHeight={!wallet.isConnected}

        masterSlot={
          <BlocksListView 
            blocks={wallet.latestBlocks!} 
            loading={wallet.isBlocksLoading} 
            onItemClick={this.onBlockSelected}
            header="Recent Blocks" />
        }

        detailSlot={
          <ConnectWallet wallet={wallet}>
              {
                !selectedItem && <MyWallet wallet={walletToPassdown} />
              }
              {
                selectedItem && (
                  <BlockDetailView 
                    key={(selectedItem! as IBlock).number.valueOf()}
                    block={selectedItem!} 
                    onMyWalletClick={this.resetSelectedItem}
                    wallet={wallet} />
                )
              }
          </ConnectWallet>
        }
      />
    );
  }
}

export default withWallet(BlockExplorer);