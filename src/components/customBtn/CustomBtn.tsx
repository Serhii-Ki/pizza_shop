import styles from './customBtn.module.css';
import cn from 'classnames';

type ButtonPropsType = {
  title: string;
  spanTitle?: string;
  addCount?: number;
  onClick: () => void;
  classType: 'filter' | 'add' | 'carts';
  isActive?: boolean;
}

function CustomBtn(props: ButtonPropsType) {
  return (
      <button className={cn(styles['btn'], {
        [styles['filter-btn']]: props.classType === 'filter',
        [styles['add-btn']]: props.classType === 'add',
        [styles['carts-btn']]: props.classType === 'carts',
        [styles['filter-active']]: props.isActive,
      })} onClick={props.onClick}>
        <span className={styles['add-span']}>{props.spanTitle}</span>
        {props.title}
        {props.classType === 'add' && <span className={styles['add-count']}>{props.addCount}</span>}
      </button>
  );
}

export default CustomBtn;