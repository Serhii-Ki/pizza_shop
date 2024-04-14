import FilterPanel from "../components/filterPanel/FilterPanel.tsx";
import AllCards from "../components/allCards/AllCards.tsx";
import {PizzasType} from "../App.tsx";

type HomePropsType = {
  pizzas: PizzasType[],
  isLoading: boolean
}

const Home = (props: HomePropsType) => {
  return (
      <>
        <h1 className='title'>My pizzeria</h1>
        <FilterPanel/>
        <AllCards pizzas={props.pizzas} isLoading={props.isLoading}/>
      </>
  );
};

export default Home;