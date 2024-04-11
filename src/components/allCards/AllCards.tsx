import Card from "../card/Card.tsx";
import styles from './allCards.module.css';
import {PizzasType} from "../../App.tsx";

type CardPropsType = {
  pizzas: PizzasType[]
}

const AllCards = (props: CardPropsType) => {
  return (
      <div className={styles['cards-wrapper']}>
        {props.pizzas.map(() => (<Card/>))}
      </div>
  );
};

export default AllCards;