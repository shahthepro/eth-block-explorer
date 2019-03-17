import styled from "styled-components";

const BlocksListViewItem = styled.div`
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.5s ease;
  color: #444;
  box-sizing: border-box;

  .block-number {
    color: #3498db;
  }

  .timestamp {
    color: #77788f;
    font-size: 0.7rem;
  }

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
  BlocksListViewItem,
}