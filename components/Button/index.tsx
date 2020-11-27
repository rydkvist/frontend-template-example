import React from 'react';
import styled, { css } from 'styled-components';
import { useTabbing } from '@utils';

const StyledButton = styled.button<{ isTabbing: boolean }>`
  padding: 0.5rem;
  margin: 0.5rem 0rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  border: 1px solid black;
  &:hover  {
    background-color: lightcoral;
  }

  ${props =>
    props.isTabbing &&
    css`
      :before {
        content: 'Dont tab me! ';
      }
      &:focus {
        background-color: red;
        color: white;
        outline: 2px solid green;
        outline-offset: 2px;

        :before {
          content: 'Ouch! That hurt :( ';
        }
      }
    `}
`;

type ButtonProps = {
  onClick: () => void;
  children: any;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  const isTabbing = useTabbing();

  return (
    <StyledButton onClick={onClick} isTabbing={isTabbing}>
      {children}
    </StyledButton>
  );
};
