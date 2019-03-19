import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ConnectWallet from './../../components/ConnectWallet';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

// @ts-ignore
mountAndMatchSnapshot('ConnectWallet wallet.isConnected', <ConnectWallet wallet={{
  isConnected: true
}}><div>child</div></ConnectWallet>);

// @ts-ignore
mountAndMatchSnapshot('ConnectWallet wallet.isConnected={false}', <ConnectWallet wallet={{
  isConnected: false,
  connect: () => {},
  isConnecting: false,
  lastConnectionError: ''
}}><div>child</div></ConnectWallet>);

// @ts-ignore
mountAndMatchSnapshot('ConnectWallet wallet.isConnecting={true}', <ConnectWallet wallet={{
  isConnected: false,
  connect: () => {},
  isConnecting: true,
  lastConnectionError: ''
}}><div>child</div></ConnectWallet>);

// @ts-ignore
mountAndMatchSnapshot('ConnectWallet wallet.lastConnectionError={"error"}', <ConnectWallet wallet={{
  isConnected: false,
  connect: () => {},
  isConnecting: true,
  lastConnectionError: 'error'
}}><div>child</div></ConnectWallet>);