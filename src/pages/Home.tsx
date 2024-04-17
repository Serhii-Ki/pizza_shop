import FilterPanel from "../components/filterPanel/FilterPanel.tsx";
import AllCards from "../components/allCards/AllCards.tsx";
import {PizzasType, SortItemsType} from "../App.tsx";

type HomePropsType = {
  pizzas: PizzasType[],
  isLoading: boolean
  sortList: SortItemsType[]
  sortItem: SortItemsType
  changeSortItem: (item: SortItemsType) => void
}

const Home = (props: HomePropsType) => {
  return (
      <>
        <h1 className='title'>My pizzeria</h1>
        <FilterPanel
            sortList={props.sortList}
            sortItem={props.sortItem}
            changeSortItem={props.changeSortItem}
        />
        <AllCards pizzas={props.pizzas} isLoading={props.isLoading}/>
      </>
  );
};

export default Home;