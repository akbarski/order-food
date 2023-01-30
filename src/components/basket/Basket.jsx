import React from "react";
import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";

export const Basket = ({ onClose }) => {
  const items = [
    {
      id: Math.random().toString(),
      title: "Sushi",
      price: 22.99,
      amount: 1,
    },
    {
      id: Math.random().toString(),
      title: "Schnitzel",
      price: 16.0,
      amount: 1,
    },
    {
      id: Math.random().toString(),
      title: "Barbecue Burger",
      price: 12.99,
      amount: 1,
    },
    {
      id: Math.random().toString(),
      title: "Green Bowl",
      price: 19.99,
      amount: 1,
    },
  ];
  return (
    <Modal onClose={onClose}>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedHeightContainer>
        ) : null}
        <TotalAmount price={22324.0} onClose={onClose} />
      </Content>
    </Modal>
  );
};
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
  overflow-y: scroll;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
  margin-bottom: 30px;
`;
