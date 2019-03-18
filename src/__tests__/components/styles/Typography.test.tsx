import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Subtitle, Title
} from './../../../components/styles/Typography';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

mountAndMatchSnapshot('Subtitle', <Subtitle />);
mountAndMatchSnapshot('Title', <Title />);