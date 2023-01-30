import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";

export const TotalAmount = ({ price, onClose, onOrder }) => {
  const orderButton = price > 0 && <Button onClick={onOrder}>Order</Button>;
  const fixedPrice = price.toFixed(2);
  return (
    <div>
      <InfoContainer>
        <Label>Total amount</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>
      <ButtonContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ButtonContainer>
    </div>
  );
};

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  margin: 0;
  color: #8a2b06;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 1rem;
`;
