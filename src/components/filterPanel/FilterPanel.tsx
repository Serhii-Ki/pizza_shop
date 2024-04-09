import styles from './filterPanel.module.css';
import FilterList from "../filterList/FilterList.tsx";
import SortList from "../sortList/SortList.tsx";
const FilterPanel = () => {
  return (
      <div className={styles['panel-wrapper']}>
        <FilterList/>
        <SortList/>
      </div>
  );
};

export default FilterPanel;