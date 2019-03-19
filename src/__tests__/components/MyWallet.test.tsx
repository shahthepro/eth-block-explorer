import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyWallet from './../../components/MyWallet';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

// @ts-ignore
mountAndMatchSnapshot('MyWallet wallet={isConnected: true}', <MyWallet wallet={{
  isConnected: true,
  isConnecting: false,
  networkId: Number(1),
  address: '1234567890abcdef',
  connect: () => {},
  disconnect: () => {},
}} />);

// @ts-ignore
mountAndMatchSnapshot('MyWallet wallet={isConnected: false}', <MyWallet wallet={{
  isConnected: false,
}} />);