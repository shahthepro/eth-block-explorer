export default function (it, ReactDOM, mount) {
  return function (elementName, element) {
    it(`renders <${elementName}> without crashing`, () => {
      const div = document.createElement('div');
      ReactDOM.render(element, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
    it(`matches <${elementName}> snapshot`, () => {
      const mountedElement = mount(element);
      expect(mountedElement).toMatchSnapshot();
    });
  }
}