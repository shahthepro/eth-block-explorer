import * as React from 'react';
import { IWalletState, IBlock, ITransaction } from 'src/types';
import * as PropTypes from 'prop-types';
import { Wrapper, Header, HeaderContent, HeaderActions, Content } from './styles/ContentStyles';
import { LinkButton } from './styles/Buttons';
import ProgressSpinner from './ProgressSpinner';
import BlockSummary from './BlockSummary';
import TransactionsListView from './TransactionsListView';

interface IBlockDetailViewProps {
  wallet: IWalletState,
  block: IBlock,
  onMyWalletClick(): void,
}

interface IBlockDetailViewState {
  loading: boolean,
  transactions: ITransaction[]
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
    const { block, onMyWalletClick } = this.props;
    const { loading, transactions } = this.state;
    
    return <Wrapper>
      <Header>
        <HeaderContent>Block #{block.number}</HeaderContent>
        <HeaderActions><LinkButton small onClick={onMyWalletClick}>GO TO MY WALLET</LinkButton></HeaderActions>
      </Header>
      <Content padded fixedSize>
        <BlockSummary block={block} />
      </Content>
      <Header>Transactions { !loading ? `(${transactions.length})` : '' }</Header>
      <Content padded>
        { loading && <ProgressSpinner /> }
        { !loading && <TransactionsListView transactions={transactions} /> }
      </Content>
    </Wrapper>;
  }
}

export default BlockDetailView;