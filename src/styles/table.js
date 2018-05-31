import styled from 'styled-components';
import colors from './colors';

export const Table = styled.table`
  border-spacing: 0;
  margin: 40px 0;
  width: 100%;
  td {
    padding: 10px;
  }
`;

export const Thead = styled.thead`
  background-color: ${colors.navBg};
  color: white;
`;

export const Tbody = styled.tbody`
  td {
    border-bottom: 1px solid ${colors.borderColor};
  }
`;
