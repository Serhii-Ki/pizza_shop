import styles from './sortList.module.css';
import cn from 'classnames';
import {useState} from "react";
import {SortItemsType} from "../../App.tsx";

type SortListPropsType = {
  sortList: SortItemsType[]
  sortItem: SortItemsType
  changeSortItem: (item: SortItemsType) => void
}

const SortList = (props: SortListPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSortList = () => {
    setIsOpen(!isOpen);
  }

  return (
      <div className={styles['sort-wrapper']} onClick={toggleSortList}>
        <span>{isOpen ? '\u25B2' : '\u25BC'}</span>
        <span>Сортировать по: </span>
        <span className={styles['sort-item']}>{props.sortItem}</span>
        <ul className={cn(styles['sort-list'], {
          [styles['sort-list-active']]: isOpen
        })}>
          {props.sortList.map((item: SortItemsType) => (
              <li
                  key={item}
                  className={styles['list-item']}
                  onClick={() => props.changeSortItem(item)}
              >{item}</li>
          ))}
        </ul>
      </div>
  );
};

export default SortList;