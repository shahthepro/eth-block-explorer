import * as React from 'react';
import styled from 'styled-components';
import spinner from './../res/spinner.gif';

const ProgressStyles = styled.div`
  margin: 0 auto;
  text-align: center;

  img {
    width: 100px;
  }
`;

const ProgressSpinner = () => {
  return <ProgressStyles>
    <img src={spinner} />
  </ProgressStyles>
};

export default ProgressSpinner;