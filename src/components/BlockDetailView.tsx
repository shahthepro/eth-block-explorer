import * as React from 'react';
import { IWalletState, IBlock } from 'src/types';
import * as PropTypes from 'prop-types';
import { Transaction } from 'web3-core/types';
import { Wrapper, Header, HeaderContent, HeaderActions, Content } from './styles/ContentStyles';
import { PrimaryButton } from './styles/Buttons';

interface IBlockDetailViewProps {
  wallet: IWalletState,
  block: IBlock,
  onMyWalletClick(): void,
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
    const { block, onMyWalletClick } = this.props;
    const { loading, transactions } = this.state;

    return <Wrapper>
      <Header>
        <HeaderContent>Block #{block.number}</HeaderContent>
        <HeaderActions><PrimaryButton small onClick={onMyWalletClick}>MY WALLET</PrimaryButton></HeaderActions>
      </Header>
      <Content padded>
        { loading && <div>Loading Transactions</div> }
        { !loading && <div>
          {
            transactions.map((tx: Transaction) => {
              return <div key={tx.hash}>{tx.hash}</div>;
            })
          }
        </div> }
      </Content>
    </Wrapper>;
  }
}

export default BlockDetailView;