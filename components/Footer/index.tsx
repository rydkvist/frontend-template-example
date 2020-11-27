import styled from 'styled-components';
import { author } from 'config';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H3 = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

export const Footer = () => (
  <StyledFooter role="contentinfo">
    <H3>
      {author} © Copyright {new Date().getFullYear()}
    </H3>
  </StyledFooter>
);
