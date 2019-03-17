import styled from 'styled-components';

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow: auto;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
`;

const Wrapper = styled(ColumnWrapper)`
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
`;

const Header = styled.div`
  font-size: 1.2rem;
  font-weight: 100;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  text-transform: uppercase;
  flex: auto 0 0;
  display: flex;
`;

const HeaderContent = styled.div`
  flex: auto 1 1;
`;

const HeaderActions = styled.div`
  flex: auto 0 0;
`;

interface IContentProps {
  padded?: boolean,
  fixedSize?: boolean
}

const Content = styled.div<IContentProps>`
  flex: ${props => props.fixedSize ? 'auto 0 0' : ' auto 1 1'};
  overflow: auto;
  padding: ${props => props.padded ? '1rem' : 0};
`;

export {
  Wrapper,
  Header,
  Content,
  HeaderContent,
  HeaderActions,
  RowWrapper,
  ColumnWrapper
}