import * as React from 'react';
import { IWalletState, IBlock } from 'src/types';
import * as PropTypes from 'prop-types';
import { Transaction } from 'web3-core/types';
import { Wrapper, Header, HeaderContent, HeaderActions, Content } from './styles/ContentStyles';
import { LinkButton } from './styles/Buttons';
import styled from 'styled-components';
import * as moment from 'moment';
import ProgressSpinner from './ProgressSpinner';

interface IBlockDetailViewProps {
  wallet: IWalletState,
  block: IBlock,
  onMyWalletClick(): void,
}

interface IBlockDetailViewState {
  loading: boolean,
  transactions: Transaction[]
}

const BorderedContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  border: 1px solid #f0f0f0;
`;

const DetailsContainer = styled(BorderedContainer)`
  max-height: 140px;
`;

const TransactionsListContainer = styled(BorderedContainer)`
  height: 100%;
`;

const DetailsRow = styled.div`
  width: 100%;
  /* overflow: hidden; */
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border: 0;
  }
`;

const ColumnStyles = styled.div`
  padding: 0.8rem;
  display: inline-block;
  box-sizing: border-box;
`;

const ColumnOneFifth = styled(ColumnStyles)`
  width: 20%;
`;

const ColumnFourFifth = styled(ColumnStyles)`
  width: 80%;
`;

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
        <DetailsContainer>
          <DetailsRow>
            <ColumnOneFifth>Number/Height</ColumnOneFifth>
            <ColumnFourFifth>{block.number}</ColumnFourFifth>
          </DetailsRow>
          <DetailsRow>
            <ColumnOneFifth>Hash</ColumnOneFifth>
            <ColumnFourFifth>{block.hash}</ColumnFourFifth>
          </DetailsRow>
          <DetailsRow>
            <ColumnOneFifth>Timestamp</ColumnOneFifth>
            <ColumnFourFifth>{moment(block.timestamp.valueOf(), 'X').format('MMM DD, YYYY HH:mm:ss')}</ColumnFourFifth>
          </DetailsRow>
          <DetailsRow>
            <ColumnOneFifth>Mined By</ColumnOneFifth>
            <ColumnFourFifth>{block.miner}</ColumnFourFifth>
          </DetailsRow>
          <DetailsRow>
            <ColumnOneFifth>Gas Used</ColumnOneFifth>
            <ColumnFourFifth>{block.gasUsed}</ColumnFourFifth>
          </DetailsRow>
          <DetailsRow>
            <ColumnOneFifth>Gas Limit</ColumnOneFifth>
            <ColumnFourFifth>{block.gasLimit}</ColumnFourFifth>
          </DetailsRow>
        </DetailsContainer>
      </Content>
      <Header>Transactions { !loading ? `(${transactions.length})` : '' }</Header>
      <Content padded>
        { loading && <ProgressSpinner /> }
        { !loading && <TransactionsListContainer>
          {
            transactions.length == 0 && <DetailsRow>
              <ColumnStyles>There are no ether transactions in this block</ColumnStyles>
            </DetailsRow>
          }
          {
            transactions.map((tx: Transaction) => {
              return <DetailsRow key={tx.hash}>
                <ColumnStyles>{tx.hash}</ColumnStyles>
              </DetailsRow>;
            })
          }
        </TransactionsListContainer> }
      </Content>
    </Wrapper>;
  }
}

export default BlockDetailView;