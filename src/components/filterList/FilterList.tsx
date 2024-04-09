import styles from './filterList.module.css';
import CustomBtn from "../customBtn/CustomBtn.tsx";

type FilterListType = "Все" | "Мясные" | "Вегетарианские" | "Гриль" | "Острые" | "Закрытые";
function FilterList() {
  const filterList: FilterListType[] = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];

  return (
      <div className={styles['wrapper-list']}>
        {filterList.map((item: FilterListType) => (
            <CustomBtn key={item} title={item} onClick={() => {}}/>
        ))}
      </div>
  );
}

export default FilterList;