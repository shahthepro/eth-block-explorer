import styled from "styled-components";

const BlocksListViewWrapper = styled.div`
  display: flex;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;

const BlocksListViewHeader = styled.div`
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 400;
  text-transform: uppercase;
  flex: auto 0 0;
`;

const BlocksListViewItemsWrapper = styled.div`
  flex: auto 1 1;
  overflow: auto;
`;

const BlocksListViewItem = styled.div`
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.5s ease;
  color: #444;
  box-sizing: border-box;

  &:last-child {
    border: 0;
  }
  &:hover:not(.non-clickable) {
    background-color: #f0f0f0;
    color: #000;
    cursor: pointer;
  }
`;

export {
  BlocksListViewHeader,
  BlocksListViewItemsWrapper,
  BlocksListViewWrapper,
  BlocksListViewItem,
}