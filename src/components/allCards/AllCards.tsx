import Card from "../card/Card.tsx";
import styles from './allCards.module.css';

const AllCards = () => {
  return (
      <div className={styles['cards-wrapper']}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
  );
};

export default AllCards;