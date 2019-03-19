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
  noScroll?: boolean
}

const Content = styled.div<IContentProps>`
  flex: ${props => props.fixedSize ? 'auto 0 0' : ' auto 1 1'};
  overflow: ${props => props.noScroll ? 'hidden' : 'auto'};
  padding: ${props => props.padded ? '1rem' : 0};
`;


const ColumnStyles = styled.div`
  padding: 0.8rem;
  display: inline-block;
  box-sizing: border-box;
`;

const ColumnOneFifth = styled(ColumnStyles)`
  width: 20%;
`;

const ColumnOneFourth = styled(ColumnStyles)`
  width: 25%;
`;

const ColumnFourFifth = styled(ColumnStyles)`
  width: 80%;
`;

const ColumnThreeFourth = styled(ColumnStyles)`
  width: 75%;
`;

const ColumnFullWidth = styled(ColumnStyles)`
  width: 100%;
`;

const BorderedWrapper = styled.div`
  width: 100%;
  border: 1px solid #f0f0f0;
`;

interface IListItemProps {
  nonClickable?: boolean
};

const ListItemStyle = styled.div<IListItemProps>`
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.5s ease;
  color: #444;
  box-sizing: border-box;
  background-color: #fff;

  &:last-child {
    border: 0;
  }

  &:hover {
    background-color: ${props => props.nonClickable ? '#fff' : '#f0f0f0'};
    color: ${props => props.nonClickable ? '#444' : '#000'};
    cursor: ${props => props.nonClickable ? 'auto' : 'pointer'};
  }
`;

export {
  Wrapper,
  Header,
  Content,
  HeaderContent,
  HeaderActions,
  RowWrapper,
  ColumnWrapper,

  BorderedWrapper,
  ColumnOneFifth,
  ColumnOneFourth,
  ColumnFourFifth,
  ColumnThreeFourth,
  ColumnFullWidth,

  ListItemStyle
}