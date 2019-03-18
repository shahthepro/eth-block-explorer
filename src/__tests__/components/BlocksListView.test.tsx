import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BlocksListView from './../../components/BlocksListView';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

// @ts-ignore
mountAndMatchSnapshot('BlocksListView blocks={...}', <BlocksListView blocks={[
  { number: 2, hash: '0xf', timestamp: 1552823995, miner: '0xff', gasUsed: 1000, gasLimit: 1200 },
  { number: 4, hash: '0xfe', timestamp: 1552810995, miner: '0xfd', gasUsed: 2000, gasLimit: 1020 }
]} onItemClick={() => {}} />);

// @ts-ignore
mountAndMatchSnapshot('BlocksListView loading', <BlocksListView blocks={[]} loading={true} onItemClick={() => {}} />);

// @ts-ignore
mountAndMatchSnapshot('BlocksListView blocks=[]', <BlocksListView blocks={[]} loading={false} onItemClick={() => {}} />);