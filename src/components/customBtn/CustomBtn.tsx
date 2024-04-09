import styles from './customBtn.module.css';

type ButtonPropsType = {
  title: string;
  spanTitle?: string;
  onClick: () => void;
}

function CustomBtn(props: ButtonPropsType) {
  return (
      <button className={`${styles.btn} ${styles['filter-btn']}`} onClick={props.onClick}>
        <span>{props.spanTitle}</span>
        {props.title}
      </button>
  );
}

export default CustomBtn;