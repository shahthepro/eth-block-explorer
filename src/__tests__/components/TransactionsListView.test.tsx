import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TransactionsListView from './../../components/TransactionsListView';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

// @ts-ignore
mountAndMatchSnapshot('MyWallet transactions={[]}', <TransactionsListView transactions={[]} />);

// @ts-ignore
mountAndMatchSnapshot('MyWallet transactions={...}', <TransactionsListView transactions={[
  { hash: '0x1', from: '0x2', to: '0x3', value: 10, gas: 100, gasPrice: '1000' },
  { hash: '0x4', from: '0x6', to: '0x5', value: 20, gas: 200, gasPrice: '2000' },
]} />);