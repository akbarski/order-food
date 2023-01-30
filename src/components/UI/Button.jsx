import React from "react";
import styled from "styled-components";

export const Button = ({
  children,
  border = "circle",
  variant = "container",
  ...rest
}) => {
  return (
    <StyledButton {...rest} border={border} variant={variant}>
      {children}
    </StyledButton>
  );
};

const getBackgroundColor = (props) => {
  return props.variant === "container" ? "#8a2b06" : "#FFF";
};
const getBorder = (props) => {
  return props.variant === "container" ? "none" : "1px solid #8A2B06;";
};
const getColor = (props) => {
  return props.variant === "container" ? "#ffff" : " #8A2B06;";
};
const getHoverColor = (props) => {
  return props.variant === "container" ? "#fff" : "#fff";
};

const getBorderRadius = (props) => {
  return props.border === "circle" ? "20px" : "6px";
};
const StyledButton = styled.button`
  background-color: ${getBackgroundColor};
  padding: 10px 32px;
  border-radius: ${getBorderRadius};
  width: fit-content;
  border: ${getBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getColor};
  gap: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.03em;

  :hover {
    background: #7e2a0a;
    color: ${getHoverColor};
  }
  :active {
    background: #993108;
  }

  .Plus {
    color: black;
  }
`;
