import React from 'react';
import { Box } from './components/style/App.styled';
import { Table } from './components/style/App.styled';



class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Box type='large'>Large</Box>
        <Box type='medium'>Medium</Box>
        <Box type='small'>Small</Box> */}

          <Table.Head>
            <Table.Tr>
              <Table.Th>Id</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Status</Table.Th>
          </Table.Tr>
          </Table.Head>
            <Table.Body>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>Shaxboz</Table.Td>
                <Table.Td>Student</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>Shaxboz</Table.Td>
                <Table.Td>Student</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>Shaxboz</Table.Td>
                <Table.Td>Student</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>1</Table.Td>
                <Table.Td>Shaxboz</Table.Td>
                <Table.Td>Student</Table.Td>
              </Table.Tr>
            </Table.Body>
      </div>
    );
  }
}

export default App;
