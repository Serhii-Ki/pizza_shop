import CustomBtn from "../customBtn/CustomBtn.tsx";
import styles from './card.module.css';
import cn from 'classnames';


const Card = () => {
  return (
      <div className={styles['card-wrapper']}>
        <img
            src="https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp"
            alt=""
            className={styles['img']}
        />
        <h3 className={styles['title']}>Pizza Name</h3>
        <div className={styles['descr-wrapper']}>
          <div className={styles['items-wrapper']}>
            <span className={cn(styles['item'], {
              [styles['active-item']]: true,
            })}>Тонкое</span>
            <span className={styles['item']}>Традиционное</span>
          </div>
          <div className={styles['items-wrapper']}>
            <span className={cn(styles['item'], {
              [styles['active-item']]: true,
            })}>26 см</span>
            <span className={styles['item']}>30 см</span>
            <span className={styles['item']}>40 см</span>
          </div>
        </div>
        <div className={styles['menu']}>
          <span className={styles['price']}>от 10 $</span>
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