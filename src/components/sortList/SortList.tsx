import styles from './sortList.module.css';
import cn from 'classnames';
import {useState} from "react";

const SortList = () => {
  const sortList = ['популярности', 'цене', 'алфавиту'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleSortList = () => {
    setIsOpen(!isOpen);
  }

  return (
      <div className={styles['sort-wrapper']} onClick={toggleSortList}>
        <span>{isOpen ? '\u25B2' : '\u25BC'}</span>
        <span>Сортировать по: </span>
        <span className={styles['sort-item']}>{sortList[0]}</span>
        <ul className={cn(styles['sort-list'], {
          [styles['sort-list-active']]: isOpen
        })}>
          {sortList.map((item: string) => (
              <li key={item} className={styles['list-item']}>{item}</li>
          ))}
        </ul>
      </div>
  );
};

export default SortList;