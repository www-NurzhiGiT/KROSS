import React, { useState } from "react";
import "./Products.scss";

import Plus from "../../assets/svg/plus.svg";
import Green from "../../assets/svg/GreenButton.svg";
import { useDispatch } from "react-redux";
import Heart from "../../assets/svg/Heart.svg";
import { addItem } from "../../redux/wishList/wishSlice";
import { addToCart } from "../../redux/cart/cartSlice";

function Products({ items }) {
  const [active, setActive] = useState(null);
  const dispatch = useDispatch();

  const handleButtonClick = (product) => {
    setActive(product.id);
    dispatch(addToCart(product));
  };

  return (
    <div className="Products-wrapper container">
      {items.map((product) => (
        <div className="products" key={product.id} data={product}>
          <img
            src={product.image}
            alt="KROSS-Images"
            className="image-product-log"
          />
          <div className="wishList">
            <img
              src={Heart}
              alt="images/heart"
              onClick={() => dispatch(addItem(product))}
              className="Like"
            />
          </div>
          <h2>{product.name}</h2>
          <div className="product-bottom">
            <div>
              <p>Цена:</p>
              <h4>{product.price} руб.</h4>
            </div>
            <div>
              {active !== product.id ? (
                <button
                  onClick={() => setActive(product.id)}
                  className="btn-product"
                >
                  <img src={Plus} alt="" />
                </button>
              ) : (
                <button
                  onClick={() => handleButtonClick(product)}
                  className="btn-product"
                >
                  <img src={Green} alt="" />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
