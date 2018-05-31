import styled from 'styled-components';
import colors from './colors';

export default styled.div`
  margin-bottom: 1rem;
  input,
  textarea {
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${colors.borderColor};
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  textarea {
    font-family: Helvetica, serif;
    min-height: 150px;
  }
`;
