import styled from 'styled-components';
import Image from 'next/image';
import { appName } from 'config';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => (
  <StyledFooter>
    <Link
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      {appName} © Copyright {new Date().getFullYear()}
      {/* Powered by <Image width="auto" height="auto" src="/vercel.svg" alt="Vercel Logo" /> */}
    </Link>
  </StyledFooter>
);
