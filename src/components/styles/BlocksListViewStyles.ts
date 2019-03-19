import styled from "styled-components";
import { ListItemStyle } from './ContentStyles';

interface IBlocksListViewItemProps {
  selected?: boolean
}

const BlocksListViewItem = styled(ListItemStyle)<IBlocksListViewItemProps>`
  background-color: ${props => props.selected ? '#f0f0f0' : '#fff'};
  color: ${props => props.selected ? '#000' : '#444'};
  .block-number {
    color: #3498db;
  }

  .timestamp {
    color: #77788f;
    font-size: 0.7rem;
  }
`;

export {
  BlocksListViewItem,
}