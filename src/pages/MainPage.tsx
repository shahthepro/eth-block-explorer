import * as React from 'react';
import Container from 'src/components/styles/Container';
import BlockExplorer from 'src/components/BlockExplorer';
import { Title } from 'src/components/styles/Typography';

class MainPage extends React.Component {
  render() {
    return (
      <Container>
        <Title centered>Block Explorer</Title>
        <BlockExplorer />
      </Container>
    );
  }
}

export default MainPage;