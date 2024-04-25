import styles from './filterList.module.css';
import CustomBtn from "../customBtn/CustomBtn.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../redux/store.ts";
import {setCategoryId} from "../../redux/slices/filterSlice.ts";

export type FilterListType = "Все" | "Мясные" | "Вегетарианские" | "Гриль" | "Острые" | "Закрытые";
function FilterList() {
  const filterList: FilterListType[] = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
  const dispatch = useDispatch();
  const categoryId = useSelector<AppStore>(state => state.filter.categoryId);

  const onChangeFilter = (categoryId: number) => {
    dispatch(setCategoryId(categoryId));
  }

  return (
      <div className={styles['wrapper-list']}>
        {filterList.map((item: FilterListType, index: number) => (
            <CustomBtn
                key={item} 
                title={item}
                onClick={() => onChangeFilter(index)}
                classType={'filter'} isActive={index === categoryId}/>
        ))}
      </div>
  );
}

export default FilterList;