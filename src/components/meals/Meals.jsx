import React from "react";
import styled from "styled-components";
import { MealItem } from "./meal-item/MealItem";
const DUMMY_MEALS = [
  {
    id: Math.random().toString(),
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: Math.random().toString(),
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: Math.random().toString(),
    title: "Barbecue Burger",
    description: "American Barbecue Burger",
    price: 12.99,
  },
  {
    id: Math.random().toString(),
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

export const Meals = () => {
  return (
    <Card>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem meal={meal} key={meal.id} />;
        })}
      </ul>
    </Card>
  );
};

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  width: 64rem;
  margin: 40px auto;
  padding: 40px 40px 16px 40px;
`;
