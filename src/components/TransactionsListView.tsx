import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TransactionsListWrapper, BlockDetailsRow, TransactionsListItem, BlockDetailsWrapper } from './styles/BlockDetailViewStyles';
import { RowWrapper, HeaderContent, HeaderActions, ColumnOneFifth, ColumnFourFifth } from './styles/ContentStyles';
import dropdown from './../res/dropdown.svg';
import { ITransaction } from './../types';

interface ITransactionsListViewProps {
  transactions: ITransaction[],
}

interface ITransactionsListViewState {
  selectedItem?: ITransaction,
}

class TransactionsListView extends React.Component<ITransactionsListViewProps, ITransactionsListViewState> {
  static propTypes = {
    transactions: PropTypes.array.isRequired,
  }

  state = {
    selectedItem: undefined
  }

  toggleTxRow = (tx: ITransaction, _: any) => {
    if (this.state.selectedItem !== undefined && (this.state.selectedItem! as ITransaction).hash == tx.hash) {
      // Already selected, so toggle view
      this.setState({
        selectedItem: undefined
      });
      return;
    }

    this.setState({
      selectedItem: tx,
    })
  };

  render() {
    const { transactions } = this.props;
    const { selectedItem } = this.state;
    return (
      <TransactionsListWrapper>
          {
            transactions.length == 0 && <BlockDetailsRow>
              <TransactionsListItem>There are no ether transactions</TransactionsListItem>
            </BlockDetailsRow>
          }
          {
            transactions.map((tx: ITransaction) => {
              const isExpanded = selectedItem ? (selectedItem! as ITransaction).hash === tx.hash : false;
              return <BlockDetailsRow key={tx.hash}>
                <TransactionsListItem expanded={ isExpanded } onClick={(e: any) => this.toggleTxRow(tx, e)}>
                  <div>
                    <RowWrapper className={'header'}>
                      <HeaderContent>{tx.hash}</HeaderContent>
                      <HeaderActions><img src={dropdown} className={'dropdown-arrow'} /></HeaderActions>
                    </RowWrapper>
                  </div>
                  <BlockDetailsWrapper className={'expanded-view'} onClick={e => e.stopPropagation()}>
                    <BlockDetailsRow>
                      <ColumnOneFifth>Sender</ColumnOneFifth>
                      <ColumnFourFifth>{tx.from}</ColumnFourFifth>
                    </BlockDetailsRow>
                    <BlockDetailsRow>
                      <ColumnOneFifth>Receiver</ColumnOneFifth>
                      <ColumnFourFifth>{tx.to}</ColumnFourFifth>
                    </BlockDetailsRow>
                    <BlockDetailsRow>
                      <ColumnOneFifth>Ether sent</ColumnOneFifth>
                      <ColumnFourFifth>{tx.value} Ether</ColumnFourFifth>
                    </BlockDetailsRow>
                    <BlockDetailsRow>
                      <ColumnOneFifth>Gas Used</ColumnOneFifth>
                      <ColumnFourFifth>{tx.gas}</ColumnFourFifth>
                    </BlockDetailsRow>
                    <BlockDetailsRow>
                      <ColumnOneFifth>Gas Price</ColumnOneFifth>
                      <ColumnFourFifth>{tx.gasPrice} Gwei</ColumnFourFifth>
                    </BlockDetailsRow>
                </BlockDetailsWrapper>
                </TransactionsListItem>
              </BlockDetailsRow>;
            })
          }
        </TransactionsListWrapper>
    );
  }
}

export default TransactionsListView;