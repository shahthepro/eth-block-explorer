import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ErrorMessage,
  InfoMessage
} from './../../../components/styles/ErrorStyles';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

mountAndMatchSnapshot('ErrorMessage', <ErrorMessage />);
mountAndMatchSnapshot('InfoMessage', <InfoMessage />);