import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHigh, setBtnIsHigh] = useState(false);

  const cartctx = useContext(CartContext);

  const { items } = cartctx;

  const numberOfCartItems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump : ""}`;

  useEffect(() => {
    if (cartctx.items.length === 0) {
      return;
    }
    setBtnIsHigh(true);
    setTimeout(() => {
        setBtnIsHigh(false);
    }, 300)
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
      <span></span>
    </button>
  );
};

export default HeaderCartButton;
