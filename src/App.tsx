import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";

import Header from "./components/header/Header.tsx";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import NotFound from "./pages/NotFound.tsx";
import {AppStore} from "./redux/store.ts";
import {sortPropertyType} from "./redux/slices/filterSlice.ts";

import './App.css'

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

  const categoryId = useSelector<AppStore>(state => state.filter.categoryId);
  const sortCategory = useSelector<AppStore>(state => state.filter.sort.sortProperty) as sortPropertyType;


  useEffect(() => {
    setIsLoading(true);
    const url = new URL('https://66180a6c9a41b1b3dfbc17c9.mockapi.io/items');
      if(categoryId){url.searchParams.append('category', String(categoryId));}
      url.searchParams.append('sortBy', sortCategory);

    axios.get(url)
        .then(response => response.data)
        .then(data => {
          setPizzas(data);
          setIsLoading(false);
        });

    window.scrollTo(0, 0);
  }, [sortCategory, categoryId])

  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home
            pizzas={pizzas}
            isLoading={isLoading}
        />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
