import './App.css'
import {useEffect, useState} from "react";
import Header from "./components/header/Header.tsx";
import FilterPanel from "./components/filterPanel/FilterPanel.tsx";
import AllCards from "./components/allCards/AllCards.tsx";

export type PizzasType = {
  id: number,
    "imageUrl": string,
    "title": string,
    "types": number[],
    "sizes": number[],
    "price": number,
    "category": number,
    "rating": number
}

function App() {
  const [pizzas, setPizzas] = useState<PizzasType[]>([]);

  useEffect(() => {
    fetch('https://66180a6c9a41b1b3dfbc17c9.mockapi.io/items')
        .then(response => response.json())
        .then(data => {
          setPizzas(data);
       })
  }, [])

  return (
    <div className='container'>
      <Header/>
      <h1 className='title'>My pizzeria</h1>
      <FilterPanel/>
      <AllCards pizzas={pizzas}/>
    </div>
  )
}

export default App
