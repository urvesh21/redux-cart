import React, { useState } from "react";
import styles from "./CartItem.module.css";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, removeFromCart, adjustQty }) => {
  const onChangeHandler = e => {
    adjustQty(item.id, e.target.value)
  }
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>Title</p>
        <p className={styles.details__desc}>Description</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={item.qty} onChange={onChangeHandler} />
        </div>
        <button className={styles.actions__deleteItemBtn} onClick={() => removeFromCart(item.id)}>
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, qty) => dispatch(adjustQty(id, qty))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
