import styled, {css} from 'styled-components';

const getSize = ({ type }) => {
  switch (type) {
    case 'large':
      return { size: '200px', color: 'blue' };
    case 'medium':
      return { size: '150px', color: 'coral' };
    case 'small':
      return { size: '100px', color: 'red' };
    default:
      return { size: '150px', color: 'yellow' };
  }
};

export const Box = styled.div`
  width: ${(props) => getSize(props).size};
  height: ${(props) => getSize(props).size};
  background-color: ${(props) => getSize(props).color};
  margin: 20px;
`;
