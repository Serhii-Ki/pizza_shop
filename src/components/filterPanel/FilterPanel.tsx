import styles from './filterPanel.module.css';
import FilterList from "../filterList/FilterList.tsx";
import SortList from "../sortList/SortList.tsx";
import {SortItemsType} from "../../App.tsx";

type FilterPanelPropsType = {
  sortList: SortItemsType[]
  sortItem: SortItemsType
  changeSortItem: (item: SortItemsType) => void
}

const FilterPanel = (props: FilterPanelPropsType) => {
  return (
      <div className={styles['panel-wrapper']}>
        <FilterList/>
        <SortList
            sortList={props.sortList}
            sortItem={props.sortItem}
            changeSortItem={props.changeSortItem}
        />
      </div>
  );
};

export default FilterPanel;