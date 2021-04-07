import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ total }) => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{total}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.shop.cart.reduce((total, cartItem) => {
      total += cartItem.qty;
      return total;
    }, 0)
  }
}

export default connect(mapStateToProps)(Navbar);
