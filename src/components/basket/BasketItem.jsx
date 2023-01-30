import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";
import { ReactComponent as Subtract } from "../assets/icons/Vector.svg";
import { ReactComponent as HoveredPlus } from "../assets/icons/whiteplus.svg";
import { ReactComponent as HoveredSubtract } from "../assets/icons/whitevector.svg";

export const BasketItem = ({ title, price, amount }) => {
  const [isIconHover, setIconHover] = useState(false);

  const changeIconColorHandler = () => {
    setIconHover(true);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAmountContainer>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAmountContainer>
        <CounterContainer>
          <Button
            onMouseOver={changeIconColorHandler}
            border="squared"
            variant="outlined"
          >
            {isIconHover ? <HoveredPlus /> : <Plus />}
          </Button>
          <Button
            onMouseOver={changeIconColorHandler}
            border="squared"
            variant="outlined"
          >
            {isIconHover ? <HoveredSubtract /> : <Subtract />}
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  padding: 24px 0;
  width: 100%;
`;
const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px 0;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`;
const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 6px 14px;
  display: inline-block;
`;

const PriceAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
`;
const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
