import { useState } from "react";
import "./App.css";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/summary/Summary";
import { BasketProvider } from "./store/BasketContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const basketShow = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  return (
    <BasketProvider>
      <Header onShowModal={basketShow} />
      <Summary />
      <Meals />
      {isModalOpen && <Basket onClose={basketShow} />}
    </BasketProvider>
  );
}

export default App;
