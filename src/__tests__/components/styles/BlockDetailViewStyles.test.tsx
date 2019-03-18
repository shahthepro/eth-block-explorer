import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockDetailsWrapper, BlockDetailsRow, TransactionsListItem, TransactionsListWrapper } from './../../../components/styles/BlockDetailViewStyles';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

mountAndMatchSnapshot('BlockDetailsWrapper', <BlockDetailsWrapper />);
mountAndMatchSnapshot('BlockDetailsRow', <BlockDetailsRow />);
mountAndMatchSnapshot('TransactionsListItem', <TransactionsListItem />);
mountAndMatchSnapshot('TransactionsListWrapper', <TransactionsListWrapper />);
