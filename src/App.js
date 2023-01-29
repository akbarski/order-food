import "./App.css";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/summary/Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <Meals />
      <Basket />
    </div>
  );
}

export default App;
