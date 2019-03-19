import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LinkButton, PrimaryButton, SecondaryButton } from './../../../components/styles/Buttons';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mountAndMatchSnapshotHOF from '../../../mountAndMatchSnapshotHOF';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

const mountAndMatchSnapshot = mountAndMatchSnapshotHOF(it, ReactDOM, mount);

mountAndMatchSnapshot('LinkButton', <LinkButton/>);
mountAndMatchSnapshot('PrimaryButton', <PrimaryButton/>);
mountAndMatchSnapshot('PrimaryButton small', <PrimaryButton small/>);
mountAndMatchSnapshot('SecondaryButton', <SecondaryButton/>);
mountAndMatchSnapshot('SecondaryButton small', <SecondaryButton small/>);
