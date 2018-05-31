import React from 'react';
import styled from 'styled-components';

const NotFound = styled.h2`
  margin-top: 40px;
  text-align: center;
`;

export const PageNotFound = () => (
  <NotFound>404 error! Page Not Found!</NotFound>
);

export default PageNotFound;
