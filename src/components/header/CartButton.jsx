import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../assets/icons/Component 6/Group.svg";

export const CartButton = ({ count = 0 }) => {
  return (
    <StyledBtn>
      <BasketIcon />
      <StyledTitle>Your Cart</StyledTitle>
      <StyledCounter>{count || 0}</StyledCounter>
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  background-color: #5a1f08;
  border-radius: 1.2rem;
  padding: 0.7rem 2rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: -webkit-grab;
`;

const StyledTitle = styled.p``;

const StyledCounter = styled.span`
  background-color: #8a2b06;
  padding: 0.4rem 0.9rem;
  border-radius: 40%;
  :hover {
    background-color: #2c0d00;
  }
`;
