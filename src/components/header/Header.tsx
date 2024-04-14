import styles from './header.module.css';
import {Link} from "react-router-dom";

function Header() {
  return (
      <header className={styles['header']}>
        <Link to={'/'} className={styles['logo']}><span>Logo</span><span>My pizza shop</span></Link>
        <Link to={'/cart'}>
          <div className={styles['cart-btn']}>
            <p>500$</p>
            <div className={styles['vertical-bar']}></div>
            <p>cart</p>
          </div>
        </Link>
      </header>
  );
}

export default Header;