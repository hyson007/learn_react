import classes from "./Button.module.css";

const Button = (props) => {
  // set a type from prop and fallback
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      type={props.type || "button}"}
    >
        {props.children}
    </button>
  );
};

export default Button;
