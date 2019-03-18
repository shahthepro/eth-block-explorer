import styled from "styled-components";
import { ListItemStyle } from './ContentStyles';

const BlocksListViewItem = styled(ListItemStyle)`
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