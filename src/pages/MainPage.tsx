import * as React from 'react';
import Container from './../components/styles/Container';
import BlockExplorer from './../components/BlockExplorer';
import { Title } from './../components/styles/Typography';

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