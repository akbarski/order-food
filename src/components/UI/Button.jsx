import React from "react";
import styled from "styled-components";

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #8a2b06;
  padding: 10px 24px 10px 16px;
  border-radius: 20px;
  width: fit-content;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  gap: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.03em;
`;
