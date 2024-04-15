import CustomBtn from "../customBtn/CustomBtn.tsx";
import styles from './card.module.css';
import cn from 'classnames';
import {PizzasType} from "../../App.tsx";

type PizzaPropsType = {
  pizza: PizzasType
}

const Card = (props: PizzaPropsType) => {
  return (
      <div className={styles['card-wrapper']}>
        <img
            src="https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp"
            alt="pizza"
            className={styles['img']}
        />
        <h3 className={styles['title']}>{props.pizza.title}</h3>
        <div className={styles['descr-wrapper']}>
          <div className={styles['items-wrapper']}>
            {/*<span className={cn(styles['item'], {*/}
            {/*  [styles['active-item']]: true,*/}
            {/*})}>Тонкое</span>*/}
            {props.pizza.types.map((type: number, index ) =>
                (<span key={type} className={cn(styles['item'], {
                  [styles['active-item']]: index === 0,
                })}>{type === 0 ? 'Тонкое' : 'Традиционное'}
                </span>))}
          </div>
          <div className={styles['items-wrapper']}>
            {props.pizza.sizes.map((size: number, index ) => (<span key={size} className={cn(styles['item'], {
              [styles['active-item']]: index === 0,
            })}>{size}</span>))}
          </div>
        </div>
        <div className={styles['menu']}>
          <span className={styles['price']}>От {Math.trunc(props.pizza.price / 80)} $</span>
          <CustomBtn
              title={'Добавить'}
              spanTitle={'+'}
              onClick={() => {}}
              classType={'add'}
              addCount={0}
          />
        </div>
      </div>
  );
};

export default Card;