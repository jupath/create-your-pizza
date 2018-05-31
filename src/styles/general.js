import styled from 'styled-components';
import device from './device';

export const Container = styled.div`
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 90%;
  }

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1200px;
  }
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
`;
