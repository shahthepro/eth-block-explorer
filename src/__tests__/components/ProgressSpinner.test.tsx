import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProgressSpinner from './../../components/ProgressSpinner';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

mountAndMatchSnapshot('ProgressSpinner', <ProgressSpinner />);