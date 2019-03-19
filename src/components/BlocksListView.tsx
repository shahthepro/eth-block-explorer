import * as React from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';
import { IBlock } from './../types';
import {
  BlocksListViewItem,
} from './styles/BlocksListViewStyles';
import { Content, Wrapper, Header } from './styles/ContentStyles';
import ProgressSpinner from './ProgressSpinner';

interface IBlocksListViewProps {
  loading: boolean
  blocks: IBlock[]
  header: String
  selectedBlock?: IBlock
  onItemClick(block: IBlock, event: any): void
};

const BlocksListViewItems = ({ loading, blocks, onItemClick, selectedBlock }: IBlocksListViewProps) => {
  if (loading) {
    return <ProgressSpinner />;
  }

  if (!blocks || blocks.length == 0) {
    return <Content>
      <BlocksListViewItem nonClickable>No blocks found</BlocksListViewItem>
    </Content>;
  }
  return (
    <Content>
      {
        blocks.map(block => (
          <BlocksListViewItem
            selected={selectedBlock && selectedBlock.number == block.number}
            onClick={(e) => { onItemClick && onItemClick(block, e); } }
            key={block.number.valueOf()}
          >
            <div className="block-number">#{block.number}</div>
            <div className="timestamp">{moment(block.timestamp.valueOf(), 'X').format("MMM DD, YYYY HH:mm")}</div>
          </BlocksListViewItem>
        ))
      }
    </Content>
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
    <Wrapper>
      <Header>{ header }</Header>
      <BlocksListViewItems {...props} />
    </Wrapper>
  );
};

BlocksListView.propTypes = {
  ...BlocksListViewItems.propTypes,
  header: PropTypes.string,
};

export default BlocksListView;