import './App.css'
import {useEffect, useState} from "react";
import Header from "./components/header/Header.tsx";
import Home from "./pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart.tsx";
import NotFound from "./pages/NotFound.tsx";

export type PizzasType = {
  id: number,
  imageUrl: string,
  title: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}

function App() {
  const [pizzas, setPizzas] = useState<PizzasType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://66180a6c9a41b1b3dfbc17c9.mockapi.io/items')
        .then(response => response.json())
        .then(data => {
          setPizzas(data);
          setIsLoading(false);
          console.log(data);
       })
  }, [])

  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home pizzas={pizzas} isLoading={isLoading}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
