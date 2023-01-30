import styled from "styled-components";
import { MealItemForm } from "./MealItemForm";

export const MealItem = ({ meal }) => {
  return (
    <List>
      <ListItem>
        <Title>{meal.title}</Title>
        <Description>{meal.description}</Description>
        <Price>{"$" + meal.price.toFixed(2)}</Price>
      </ListItem>
      <MealItemForm id={meal.id} meal={meal} />
    </List>
  );
};

const List = styled.li`
  list-style: none;
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  :last-child {
    border: none;
    margin: 0;
  }
`;

const ListItem = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h6`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
`;
const Description = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ad5502;
`;
