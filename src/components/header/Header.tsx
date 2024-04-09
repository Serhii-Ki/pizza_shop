import styles from './header.module.css';

function Header() {
  return (
      <header className={styles['header']}>
        <a className={styles['logo']}><span>Logo</span><span>My pizza shop</span></a>
        <a>
          <div className={styles['cart-btn']}>
            <p>500$</p>
            <div className={styles['vertical-bar']}></div>
            <p>cart</p>
          </div>
        </a>
      </header>
  );
}

export default Header;