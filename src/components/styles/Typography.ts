import styled from 'styled-components';

interface ITitleProps {
  centered?: boolean,
}

const Title = styled.h1<ITitleProps>`
  font-weight: 100;
  margin: 0;
  padding-bottom: 1rem;
  text-align: ${props => props.centered ? 'center' : 'left' };
`;

const Subtitle = styled.h2`
  font-weight: 100;
  margin: 0;
  padding-bottom: 1rem;
`;

export {
  Title,
  Subtitle
}