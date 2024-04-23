import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import Header from "./components/header/Header.tsx";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import NotFound from "./pages/NotFound.tsx";
import './App.css'
import {AppStore} from "./redux/store.ts";

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

export type SortItemsType = 'популярности' | 'цене' | 'алфавиту';

function App() {
  const [pizzas, setPizzas] = useState<PizzasType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sortList: SortItemsType[] = ['популярности', 'цене', 'алфавиту'];
  const [sortItem, setSortItem] = useState<SortItemsType>(sortList[0]);

  const categoryId = useSelector<AppStore>(state => state.filter.categoryId);


  const changeSortItem = (item: SortItemsType) => {
    setSortItem(item);
  }

  useEffect(() => {
    setIsLoading(true);
    const url = new URL('https://66180a6c9a41b1b3dfbc17c9.mockapi.io/items');
      if(categoryId){url.searchParams.append('category', String(categoryId));}
      switch(sortItem) {
        case 'популярности':
          url.searchParams.append('sortBy', 'rating');
          break
        case 'цене':
          url.searchParams.append('sortBy', 'price');
          break
        case 'алфавиту':
          url.searchParams.append('sortBy', 'title');
          break
        default:
          url.searchParams.append('sortBy', 'rating');
      }

    fetch(url)
        .then(response => response.json())
        .then(data => {
          setPizzas(data);
          setIsLoading(false);
          console.log(data);
       });
    window.scrollTo(0, 0);
  }, [sortItem, categoryId])

  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home
            pizzas={pizzas}
            isLoading={isLoading}
            sortList={sortList}
            sortItem={sortItem}
            changeSortItem={changeSortItem}
        />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
