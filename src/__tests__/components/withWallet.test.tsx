import * as React from 'react';
import withWallet from './../../components/withWallet';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
const { mount } = Enzyme;

it(`renders components and passes down wallet as prop `, () => {
  // const element = <div />;
  class fakeElement extends React.Component {
    render() {
      return (
        <div>Hello</div>
      );
    }
  }
  const WrappedElement = withWallet(fakeElement); 
  // @ts-ignore
  const mountedElement = mount(<WrappedElement />);
  // @ts-ignore
  expect(mountedElement.children().props().wallet).toBeDefined();
});