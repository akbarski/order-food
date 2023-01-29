import React from "react";
import styled from "styled-components";
import { Button } from "../../UI/Button";
import { ReactComponent as Plus } from "../../assets/icons/System icons.svg";

export const MealItemForm = ({ id }) => {
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        alert("Вы заказали питсу");
      }}
    >
      <LabelContainer>
        <StyledLabel htmlFor={id}>Amount</StyledLabel>
        <StyledInput
          type="number"
          name=""
          id={id}
          min={0}
          max={5}
          defaultValue={1}
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
