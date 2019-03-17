import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as moment from 'moment';
import { IBlock } from 'src/types';
import {
  BlocksListViewHeader,
  BlocksListViewItemsWrapper,
  BlocksListViewWrapper,
  BlocksListViewItem,
} from 'src/components/styles/BlocksListViewStyles';

interface IBlocksListViewProps {
  loading: boolean
  blocks: IBlock[]
  header: String
  onItemClick(block: IBlock, event: any): void
};

const BlocksListViewItems = ({ loading, blocks, onItemClick }: IBlocksListViewProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blocks || blocks.length == 0) {
    return <BlocksListViewItemsWrapper>
      <BlocksListViewItem className="non-clickable">No blocks found</BlocksListViewItem>
    </BlocksListViewItemsWrapper>;
  }
  return (
    <BlocksListViewItemsWrapper>
      {
        blocks.map(block => (
          <BlocksListViewItem
            onClick={(e) => { onItemClick && onItemClick(block, e); } }
            key={block.number.valueOf()}
          >
            <div className="block-number">#{block.number}</div>
            <div className="timestamp">{moment(block.timestamp.valueOf(), 'X').format("MMM DD, YYYY HH:mm")}</div>
          </BlocksListViewItem>
        ))
      }
    </BlocksListViewItemsWrapper>
  );
}

BlocksListViewItems.propTypes = {
  loading: PropTypes.bool,
  blocks: PropTypes.array,
  onItemClick: PropTypes.func
};

const BlocksListView = (props: IBlocksListViewProps) => {
  const { header } = props;

  return (
    <BlocksListViewWrapper>
      <BlocksListViewHeader>{ header }</BlocksListViewHeader>
      <BlocksListViewItems {...props} />
    </BlocksListViewWrapper>
  );
};

BlocksListView.propTypes = {
  ...BlocksListViewItems.propTypes,
  header: PropTypes.string,
};

export default BlocksListView;