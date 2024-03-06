import propsTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propsTypes = {
  text: propsTypes.string.isRequired,
};

export default Button;
