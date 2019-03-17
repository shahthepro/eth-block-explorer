import * as React from 'react';
import { IWalletState, IBlock } from 'src/types';
import * as PropTypes from 'prop-types';
import { Transaction } from 'web3-core/types';

interface IBlockDetailViewProps {
  wallet: IWalletState,
  block: IBlock
}

interface IBlockDetailViewState {
  loading: boolean,
  transactions: Transaction[]
}

class BlockDetailView extends React.Component<IBlockDetailViewProps, IBlockDetailViewState> {
  static propTypes = {
    wallet: PropTypes.object.isRequired,
    block: PropTypes.object,
  }

  state = {
    loading: false,
    transactions: []
  }

  loadTransactions = async () => {
    let transactions = await this.props.wallet.getTransactionsFromBlock!(this.props.block.number.valueOf());

    this.setState({
      loading: false,
      transactions
    });
  }

  componentWillMount() {
    this.setState({
      loading: true
    })
    this.loadTransactions();
  }

  render() {
    const { block } = this.props;
    const { loading, transactions } = this.state;

    return <div>
      {
        block && <div>Block {block.number}</div>
      }
      { loading && <div>Loading Transactions</div> }
      { !loading && <div>
        {
          transactions.map((tx: Transaction) => {
            return <div key={tx.hash}>{tx.hash}</div>;
          })
        }
      </div> }
    </div>
  }
}

export default BlockDetailView;