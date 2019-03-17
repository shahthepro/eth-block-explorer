import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  overflow: hidden;
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
  padded?: boolean
}

const Content = styled.div<IContentProps>`
  flex: auto 1 1;
  overflow: auto;
  padding: ${(props: any) => props.padded ? '1rem' : 0};
`;

export {
  Wrapper,
  Header,
  Content,
  HeaderContent,
  HeaderActions
}