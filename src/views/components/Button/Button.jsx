import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding-inline: 0rem;
  padding-block: 0rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid blue;
  border-radius: 0.25rem;  
  background: none;
  background-color: blue;
  text-transform: uppercase;
  color: white;
  font: inherit;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: darkblue;
    border-color: darkblue;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: gray;
    border-color: gray;
  }
`;

export const Button = ({ children, onClick, disabled, ...props }) => {
  return (
    <StyledButton {...props} onClick={onClick} disabled={disabled} tabIndex="0">
      {children}
    </StyledButton>
  );
};
