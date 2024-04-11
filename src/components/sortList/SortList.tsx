import styles from './sortList.module.css';
import cn from 'classnames';
import {useState} from "react";

type SortItemsType = 'популярности' | 'цене' | 'алфавиту';

const SortList = () => {
  const sortList: SortItemsType[] = ['популярности', 'цене', 'алфавиту'];
  const [sortItem, setSortItem] = useState<SortItemsType>(sortList[0]);
  const [isOpen, setIsOpen] = useState(false);

  const changeSortItem = (item: SortItemsType) => {
    setSortItem(item);
  }
  const toggleSortList = () => {
    setIsOpen(!isOpen);
  }

  return (
      <div className={styles['sort-wrapper']} onClick={toggleSortList}>
        <span>{isOpen ? '\u25B2' : '\u25BC'}</span>
        <span>Сортировать по: </span>
        <span className={styles['sort-item']}>{sortItem}</span>
        <ul className={cn(styles['sort-list'], {
          [styles['sort-list-active']]: isOpen
        })}>
          {sortList.map((item: SortItemsType) => (
              <li
                  key={item}
                  className={styles['list-item']}
                  onClick={() => changeSortItem(item)}
              >{item}</li>
          ))}
        </ul>
      </div>
  );
};

export default SortList;