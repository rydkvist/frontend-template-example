import styled from 'styled-components';
import { appName } from '../../config';

const StyledHeader = styled.header`
  width: 100%;
  background-color: #394249;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  color: white;
`;

export const Header = () => (
  <StyledHeader>
    <H2>{appName}</H2>
  </StyledHeader>
);
