import styled from "styled-components";

const MasterDetailWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
`;

const MasterContainer = styled.div`
  flex: 300px 0 0;
`;
const DetailsContainer = styled.div`
  flex: auto;
`;

export {
  MasterContainer,
  DetailsContainer,
  MasterDetailWrapper,
}