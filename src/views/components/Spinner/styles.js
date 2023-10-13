import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;  
  flex-direction: column;
  flex-basis: 0%;
  flex-wrap: wrap;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 1rem;
`;

export const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    border: 4px solid #eeeeee;
    border-top-color: blue;
    border-radius: 50%;
    animation: loading 1s ease-in-out infinite;
  }
`;
