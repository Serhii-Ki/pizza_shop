import CustomBtn from "../components/customBtn/CustomBtn.tsx";
import styles from "./cart.module.css"
import {Link} from "react-router-dom";

const Cart = () => {
  return (
      <div className='cart-wrapper'>
        <div className={styles['header-cart']}>
          <h2>Cart</h2>
          <p>очистить корзину</p>
        </div>
        <div className={styles['items-wrapper']}>

          <div className={styles['item-wrapper']}>
            <div className={styles['deskr-wrapper']}>
              <img
                  src="https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp"
                  alt='pizza'
                  className={styles['cart-img']}
              />
              <p className={styles['description']}>Сырный цепленок <span>Тонкое тесто, 26см</span></p>
            </div>
            <div className={styles['btn-wrapper']}>
              <CustomBtn title='&#8722;' onClick={() => {
              }} classType={"carts"}/>
              <p>2</p>
              <CustomBtn title='&#43;' onClick={() => {
              }} classType={"carts"}/>
            </div>
            <p className={styles['price']}>20 $</p>
            <CustomBtn title='&#x2715;' onClick={() => {
            }} classType={"carts"}/>
          </div>

          <div className={styles['item-wrapper']}>
            <div className={styles['deskr-wrapper']}>
              <img
                  src="https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp"
                  alt='pizza'
                  className={styles['cart-img']}
              />
              <p className={styles['description']}>Сырный цепленок <span>Тонкое тесто, 26см</span></p>
            </div>
            <div className={styles['btn-wrapper']}>
              <CustomBtn title='&#8722;' onClick={() => {
              }} classType={"carts"}/>
              <p>2</p>
              <CustomBtn title='&#43;' onClick={() => {
              }} classType={"carts"}/>
            </div>
            <p className={styles['price']}>20 $</p>
            <CustomBtn title='&#x2715;' onClick={() => {
            }} classType={"carts"}/>
          </div>

        </div>
        <div className={styles['sum']}>
          <p className={styles['count']}>Всего пицц: <span>3 шт.</span></p>
          <p className={styles['count-sum']}>Сумма заказа: <span>20 $</span></p>
        </div>
        <div className={styles['btn-menu']}>
          <Link to={'/'} className={styles['link-back']}>Вернуться назад</Link>
          <Link to={'/menu'} className={styles['link-buy']}>Оплатить покупку</Link>
        </div>
      </div>
  );
};

export default Cart;