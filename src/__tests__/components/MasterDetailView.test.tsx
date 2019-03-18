import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MasterDetailView from './../../components/MasterDetailView';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

mountAndMatchSnapshot('MasterDetailView', <MasterDetailView masterSlot={<div>Master</div>} detailSlot={<div>Details</div>} />);
mountAndMatchSnapshot('MasterDetailView masterOpen', <MasterDetailView masterOpen masterSlot={<div>Master</div>} detailSlot={<div>Details</div>} />);
mountAndMatchSnapshot('MasterDetailView autoHeight', <MasterDetailView autoHeight masterSlot={<div>Master</div>} detailSlot={<div>Details</div>} />);
mountAndMatchSnapshot('MasterDetailView autoHeight masterOpen', <MasterDetailView autoHeight masterOpen masterSlot={<div>Master</div>} detailSlot={<div>Details</div>} />);