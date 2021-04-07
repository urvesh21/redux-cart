import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { connect } from 'react-redux';
import { ADD_TO_CART } from "../../../redux/Shopping/shopping-types";
import { addToCart, loadCurrentItem } from '../../../redux/Shopping/shopping-actions';

const Product = ({ productData, addToCart, loadCurrentItem }) => {
  console.log('props: ', productData);
  const { id, title, description, price, image } = productData;
  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={image} alt="" />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{title}</p>
        <p className={styles.details__desc}>{description}</p>
        <p className={styles.details__price}>$ {price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${id}`}>
          <button className={`${styles.buttons__btn} ${styles.buttons__view}`} onClick={() => loadCurrentItem()}>
            View Item
          </button>
        </Link>
        <button className={`${styles.buttons__btn} ${styles.buttons__add}`} onClick={() => addToCart()}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.productData;
  return {
    addToCart: () => dispatch(addToCart(id)),
    loadCurrentItem: () => dispatch(loadCurrentItem(ownProps.productData))
  };
}

export default connect(null, mapDispatchToProps)(Product);
