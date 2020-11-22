import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { appName, dashboardURL, homeURL, aboutURL } from 'config';
import { colors } from '@styles';
import { useTabbing } from '@utils';

const StyledHeader = styled.header`
  width: 100%;
  background: linear-gradient(-90deg, rgba(139, 209, 255, 1) 0%, rgba(84, 173, 255, 1) 41%, rgba(9, 123, 255, 1) 100%);
  min-height: 100%;
  padding: 1.25rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const H2 = styled.h2`
  color: ${colors.white};
  margin: 0;
  padding: 1rem;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    margin-right: 0rem;
  }
`;

const StyledLink = styled.a<{ isActive: boolean; isTabbing: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.25rem;
  color: ${colors.white};
  padding: 1rem;
  text-decoration: none;
  outline: none;
  &:hover {
    opacity: 0.75;
  }
  ${props =>
    props.isActive &&
    css`
      text-decoration: underline;
    `}
  ${props =>
    props.isTabbing &&
    css`
      &:focus {
        outline: 2px solid white;
      }
    `}
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

export const Header = () => {
  const isTabbing = useTabbing();
  const router = useRouter();

  const isActive = (href: string): boolean => router.pathname === href;

  return (
    <StyledHeader>
      <H2>{appName}:</H2>
      <Link href={homeURL}>
        <StyledLink href="#" isActive={isActive(homeURL)} isTabbing={isTabbing}>
          <IconWrapper>
            <ion-icon name="home-outline" />
          </IconWrapper>
          Home
        </StyledLink>
      </Link>
      <Link href={dashboardURL}>
        <StyledLink href="#" isActive={isActive(dashboardURL)} isTabbing={isTabbing}>
          <IconWrapper>
            <ion-icon name="grid-outline" />
          </IconWrapper>
          Dashboard
        </StyledLink>
      </Link>
      <Link href={aboutURL}>
        <StyledLink href="#" isActive={isActive(aboutURL)} isTabbing={isTabbing}>
          <IconWrapper>
            <ion-icon name="information-circle-outline" />
          </IconWrapper>
          About
        </StyledLink>
      </Link>
    </StyledHeader>
  );
};
