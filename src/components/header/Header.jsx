import React from "react";
import styled from "styled-components";
import { CartButton } from "./CartButton";

export const Header = () => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <CartButton></CartButton>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  padding: 0rem 4rem;
  z-index: 1;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
`;
