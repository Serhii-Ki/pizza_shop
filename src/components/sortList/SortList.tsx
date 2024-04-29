import styles from './sortList.module.css';
import cn from 'classnames';
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../redux/store.ts";
import {setSortProperty, SortNameType, sortPropertyType} from "../../redux/slices/filterSlice.ts";

type SortItemsType = {
  name: SortNameType,
  sortProperty: sortPropertyType
}

const SortList = () => {
  const sortItems: SortItemsType[] = [
    {
      name: 'популярности',
      sortProperty: 'rating',
    },
    {
      name: 'цене',
      sortProperty: 'price',
    },
    {
      name: 'алфавиту',
      sortProperty: 'title',
    }
  ]

  const [isOpen, setIsOpen] = useState(false);
  const sortItem = useSelector<AppStore>(state => state.filter.sort.name) as SortNameType;
  const dispatch = useDispatch();
  const sortRef = useRef(null);

  const toggleSortList = () => {
    setIsOpen(!isOpen);
  };

  const changeSortItem = (item: SortItemsType) => {
    dispatch(setSortProperty(item));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
      <div ref={sortRef} className={styles['sort-wrapper']} onClick={toggleSortList}>
        <span>{isOpen ? '\u25B2' : '\u25BC'}</span>
        <span>Сортировать по: </span>
        <span className={styles['sort-item']}>{sortItem}</span>
        <ul className={cn(styles['sort-list'], {
          [styles['sort-list-active']]: isOpen
        })}>
          {sortItems.map((item: SortItemsType) => (
              <li
                  key={item.name}
                  className={styles['list-item']}
                  onClick={() => changeSortItem(item)}
              >{item.name}</li>
          ))}
        </ul>
      </div>
  );
};

export default SortList;