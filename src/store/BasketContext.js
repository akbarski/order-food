import { createContext, useState } from "react";

export const BasketContext = createContext({
  items: [],
});
export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToBasket = (item) => {
    setItems((prevState) => {
      const updatedItems = prevState.map((oldItem) => {
        if (oldItem.id === item.id) {
          oldItem.amount = oldItem.amount + item.amount;
        }
        return oldItem;
      });
      return updatedItems;
    });
  };
  const state = {
    items,
    addToBasket,
  };
  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
