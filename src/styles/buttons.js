import styled from 'styled-components';
import colors from './colors';

export default styled.button`
  background: ${props => (props.red ? colors.red : colors.green)};
  color: white;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:hover {
    background-color: ${props => (props.red ? colors.red : colors.greenHover)};
    cursor: pointer;
  }
`;
