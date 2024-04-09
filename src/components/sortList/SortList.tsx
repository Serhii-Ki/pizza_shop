import styles from './sortList.module.css';

const SortList = () => {
  const sortList = ['популярности', 'цене', 'алфавиту']
  return (
      <div className={styles['sort-wrapper']}>
        <span>&#9660;</span>
        <span>Сортировать по: </span>
        <span className={styles['sort-item']}>{sortList[0]}</span>
        <ul className={styles['sort-list']}>
          {sortList.map((item: string) => (
              <li key={item} className={styles['list-item']}>{item}</li>
          ))}
        </ul>
      </div>
  );
};

export default SortList;