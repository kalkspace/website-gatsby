import styles from "./button.module.css";

export const Button = (props) => {
  return (
    <a href="#" className={styles.button} role="button">
      {props.label}
    </a>
  );
};
