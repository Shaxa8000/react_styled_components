import React from 'react';
import { Box } from './components/style/App.styled';



class App extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Box type='large'>Large</Box>
        <Box type='medium'>Medium</Box>
        <Box type='small'>Small</Box>
      </div>
    );
  }
}

export default App;
