import styles from './filterList.module.css';
import CustomBtn from "../customBtn/CustomBtn.tsx";
import {useState} from "react";

export type FilterListType = "Все" | "Мясные" | "Вегетарианские" | "Гриль" | "Острые" | "Закрытые";
function FilterList() {
  const filterList: FilterListType[] = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
  const [activeFilter, setActiveFilter] = useState<FilterListType>("Все");

  const onChangeFilter = (filter: FilterListType) => {
    setActiveFilter(filter);
  }

  return (
      <div className={styles['wrapper-list']}>
        {filterList.map((item: FilterListType) => (
            <CustomBtn key={item} title={item} onClick={() => onChangeFilter(item)} classType={'filter'} isActive={item === activeFilter}/>
        ))}
      </div>
  );
}

export default FilterList;