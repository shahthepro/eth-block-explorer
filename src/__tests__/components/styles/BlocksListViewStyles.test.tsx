import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlocksListViewItem } from './../../../components/styles/BlocksListViewStyles';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

mountAndMatchSnapshot('BlocksListViewItem', <BlocksListViewItem />);