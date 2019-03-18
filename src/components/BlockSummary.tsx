import * as React from 'react';
import { IBlock } from './../types';
import * as PropTypes from 'prop-types';
import { BlockDetailsWrapper, BlockDetailsRow } from './styles/BlockDetailViewStyles';
import { ColumnOneFifth, ColumnFourFifth } from './styles/ContentStyles';
import *  as moment from 'moment';

interface IBlockSummaryProps {
  block: IBlock
}

const BlockSummary = ({ block }: IBlockSummaryProps) => {
  return <BlockDetailsWrapper>
    <BlockDetailsRow>
      <ColumnOneFifth>Number/Height</ColumnOneFifth>
      <ColumnFourFifth>{block.number}</ColumnFourFifth>
    </BlockDetailsRow>
    <BlockDetailsRow>
      <ColumnOneFifth>Hash</ColumnOneFifth>
      <ColumnFourFifth>{block.hash}</ColumnFourFifth>
    </BlockDetailsRow>
    <BlockDetailsRow>
      <ColumnOneFifth>Timestamp</ColumnOneFifth>
      <ColumnFourFifth>{moment(block.timestamp.valueOf(), 'X').format('MMM DD, YYYY HH:mm:ss')}</ColumnFourFifth>
    </BlockDetailsRow>
    <BlockDetailsRow>
      <ColumnOneFifth>Mined By</ColumnOneFifth>
      <ColumnFourFifth>{block.miner}</ColumnFourFifth>
    </BlockDetailsRow>
    <BlockDetailsRow>
      <ColumnOneFifth>Gas Used</ColumnOneFifth>
      <ColumnFourFifth>{block.gasUsed}</ColumnFourFifth>
    </BlockDetailsRow>
    <BlockDetailsRow>
      <ColumnOneFifth>Gas Limit</ColumnOneFifth>
      <ColumnFourFifth>{block.gasLimit}</ColumnFourFifth>
    </BlockDetailsRow>
</BlockDetailsWrapper>
};

BlockSummary.propTypes = {
  block: PropTypes.object.isRequired,
};

export default BlockSummary