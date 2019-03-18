import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
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
} from './../../../components/styles/ContentStyles';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

mountAndMatchSnapshot('Wrapper', <Wrapper />);
mountAndMatchSnapshot('Header', <Header />);
mountAndMatchSnapshot('Content', <Content />);
mountAndMatchSnapshot('Content padded', <Content padded />);
mountAndMatchSnapshot('Content fixedSize', <Content fixedSize />);
mountAndMatchSnapshot('Content padded fixedSize', <Content padded fixedSize />);
mountAndMatchSnapshot('HeaderContent', <HeaderContent />);
mountAndMatchSnapshot('HeaderActions', <HeaderActions />);
mountAndMatchSnapshot('RowWrapper', <RowWrapper />);
mountAndMatchSnapshot('ColumnWrapper', <ColumnWrapper />);
mountAndMatchSnapshot('BorderedWrapper', <BorderedWrapper />);
mountAndMatchSnapshot('ColumnOneFifth', <ColumnOneFifth />);
mountAndMatchSnapshot('ColumnOneFourth', <ColumnOneFourth />);
mountAndMatchSnapshot('ColumnFourFifth', <ColumnFourFifth />);
mountAndMatchSnapshot('ColumnThreeFourth', <ColumnThreeFourth />);
mountAndMatchSnapshot('ColumnFullWidth', <ColumnFullWidth />);
mountAndMatchSnapshot('ListItemStyle', <ListItemStyle />);