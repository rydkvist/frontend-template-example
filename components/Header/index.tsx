import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { appName, dashboardURL, homeURL, aboutURL } from 'config';
import { colors } from '@styles';

const StyledHeader = styled.header`
  width: 100%;
  background: linear-gradient(-90deg, rgba(139, 209, 255, 1) 0%, rgba(84, 173, 255, 1) 41%, rgba(9, 123, 255, 1) 100%);
  min-height: 100%;
  padding: 1.25rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const H2 = styled.h2`
  color: ${colors.white};
  margin: 0;
  padding: 1rem;
`;

const StyledLink = styled.a<{ isActive: boolean }>`
  cursor: pointer;
  font-size: 1.25rem;
  color: ${colors.white};
  padding: 1rem;
  text-decoration: none;
  &:hover {
    opacity: 0.75;
  }
  ${props =>
    props.isActive &&
    css`
      text-decoration: underline;
    `}
`;

export const Header = () => {
  const router = useRouter();

  const isActive = (href: string): boolean => router.pathname === href;

  return (
    <StyledHeader>
      <H2>{appName}:</H2>
      <Link href={homeURL}>
        <StyledLink href="#" isActive={isActive(homeURL)}>
          Home
        </StyledLink>
      </Link>
      <Link href={dashboardURL}>
        <StyledLink href="#" isActive={isActive(dashboardURL)}>
          Dashboard
        </StyledLink>
      </Link>
      <Link href={aboutURL}>
        <StyledLink href="#" isActive={isActive(aboutURL)}>
          About
        </StyledLink>
      </Link>
    </StyledHeader>
  );
};
