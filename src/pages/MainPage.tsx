import * as React from 'react';
import Container from 'src/components/styles/Container';
import BlockExplorer from 'src/components/BlockExplorer';

class MainPage extends React.Component {
  render() {
    return (
      <Container>
        <BlockExplorer />
      </Container>
    );
  }
}

export default MainPage;