import styled from "styled-components";

const MasterDetailWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  &.limit-height {
    height: 500px;
  }
`;

const MasterContainer = styled.div`
  flex: 300px 0 0;
  transition: flex 0.3s ease, opacity 0.3s ease 0.3s;
  opacity: 1;
  &.master-closed {
    flex: 0px 0 0;
    opacity: 0;
  }
`;
const DetailsContainer = styled.div`
  flex: auto;
  transition: flex 0.3s ease;
`;

export {
  MasterContainer,
  DetailsContainer,
  MasterDetailWrapper,
}