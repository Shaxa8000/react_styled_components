import React, { Component } from 'react';
import { Title, Wrapper } from './components/style/App.styled';

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Hello world!</Title>
      </Wrapper>
    );
  }
}
