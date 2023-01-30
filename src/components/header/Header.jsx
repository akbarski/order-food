import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import { CartButton } from "./CartButton";

export const Header = ({ onShowModal }) => {
  const { items } = useContext(BasketContext);

  const calculateAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);
    return sum;
  };
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <CartButton
        className="bump"
        onClick={onShowModal}
        count={calculateAmount}
      ></CartButton>
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
  position: fixed;
  z-index: 1;

  /* .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  } */
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
`;
