import Card from "../card/Card.tsx";
import styles from './allCards.module.css';
import {PizzasType} from "../../App.tsx";
import Skeleton from "../skeleton/Skeleton.tsx";

type CardPropsType = {
  pizzas: PizzasType[],
  isLoading: boolean
}

const AllCards = (props: CardPropsType) => {
  return (
      <div className={styles['cards-wrapper']}>
        {props.isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
            : props.pizzas.map((pizza: PizzasType) => (<Card key={pizza.id} pizza={pizza}/>))
        }
      </div>
  );
};

export default AllCards;