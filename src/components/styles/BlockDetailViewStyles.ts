import styled from "styled-components";
import { BorderedWrapper, ListItemStyle } from './ContentStyles';

const BlockDetailsWrapper = styled(BorderedWrapper)`
  overflow-y: auto;
  max-height: 140px;
`;

const TransactionsListWrapper = styled(BorderedWrapper)`
  overflow-y: auto;
  height: 100%;
`;

const BlockDetailsRow = styled.div`
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border: 0;
  }
`;

interface ITransactionsListItemProps {
  nonClickable?: boolean,
  expanded?: boolean
}

const TransactionsListItem = styled(ListItemStyle)<ITransactionsListItemProps>`
  padding: 0.8rem 1rem;
  color: ${props => props.expanded ? '#000' : '#444'};
  overflow: hidden;

  .dropdown-arrow {
    height: 16px;
    transition: transform 0.3s ease;
    transform: rotateX(${props => props.expanded ? '180' : '0'}deg);
  }
  .expanded-view {
    ${props => props.expanded ? '' : 'border: 0;'}
    transition: height 0.3s ease, margin 0.3s ease, opacity 0.3s ease;
    height: ${props => props.expanded ? 'auto' : '0px'};
    background-color: #fff;
    color: #000;
    margin: ${props => props.expanded ? '10px 0' : '0' };
    opacity: ${props => props.expanded ? '1' : '0' };
  }
  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
  &:hover .expanded-view {
    cursor: auto;
    background-color: #fff;
    color: #000;
  }
`;

export {
  BlockDetailsWrapper,
  BlockDetailsRow,

  TransactionsListWrapper,
  TransactionsListItem
}