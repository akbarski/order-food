import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../UI/Button";
import { useContext } from "react";
import { BasketContext } from "../../../store/BasketContext";
import { ReactComponent as Plus } from "../../assets/icons/System icons.svg";

export const MealItemForm = ({ meal, id, onSubmit }) => {
  const [amount, setAmount] = useState(1);
  const { addToBasket } = useContext(BasketContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const basketItem = {
      id: meal.id,
      title: meal.title,
      price: meal.price,
      amount: meal.amount,
    };
    addToBasket(basketItem);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <Container onSubmit={submitHandler}>
      <LabelContainer>
        <StyledLabel htmlFor={id}>Amount</StyledLabel>
        <StyledInput
          type="number"
          name=""
          id={id}
          min={0}
          max={5}
          value={amount}
          onChange={amountChangeHandler}
        />
      </LabelContainer>
      <CounterContainer>
        <Button>
          <Plus />
          Add
        </Button>
      </CounterContainer>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const CounterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
`;
const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
`;

const StyledInput = styled.input`
  width: 60px;
  height: 2rem;
  outline: none;
  text-align: center;
`;
