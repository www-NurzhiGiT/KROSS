import React from "react";
import "./style/Cart.scss";
import Xl from "../assets/svg/X.svg";
import Left from "../assets/svg/Lleft.svg";
import Right from "../assets/svg/Right.svg";
import Box from "../assets/svg/box.svg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { clearCart } from "../redux/cart/cartSlice";
import { removeDelCart } from "../redux/cart/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const { items } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeDelCart({ id }));
  };

  const subTotal = items.reduce((sub, item) => sub + item.price, 0);

  const taxRate = 0.05;
  const taxTotal = (subTotal * taxRate).toFixed(2);
  const total = (parseFloat(subTotal) + parseFloat(taxTotal)).toFixed(2);

  const handleButtonClick = () => {
    if (items.length === 0) {
      toast.error("Ошибка! Ваша корзина пуста.");
    } else {
      toast.success("Оформление было успешно завершено: Спасибо за покупку!");
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-content ">
        <div>
          <h1>Корзина</h1>
        </div>
        {items.length > 0 ? (
          <div className="conteiner">
            {items.map((x) => (
              <div className="cart" key={x.id}>
                <img src={x.image} alt="KROSS-Images" className="image-cart" />
                <div>
                  <h2 className="h2-cart">{x.name}</h2>
                  <div className="cart-price">
                    <div>
                      <h4>{x.price} руб.</h4>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDelete(x.id)}
                        className="btn-product"
                      >
                        <img src={Xl} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-bottom">
              <div className="cart-bottom-item">
                <p>Итого:</p>
                <h4 className="total">{total} руб.</h4>
              </div>
              <div className="cart-bottom-item">
                <p>Налог 5%</p>
                <h4>{taxTotal} руб.</h4>
              </div>
              <div className="button-cart">
                <button onClick={handleButtonClick} className="btn-cart">
                  Оформить заказ{""}
                  <img src={Right} alt="icon-right" className="icon-right" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="wrap-bottom">
            <div className="bottom-div-cart">
              <img src={Box} alt="box-image" className="box-img" />

              <h1>Корзина пустая</h1>
              <p>
                Добавьте хотя бы одну пару <br />
                кроссовок, чтобы сделать заказ.
              </p>
            </div>
            <div className="button-cart">
              <Link to="/" className="link-button">
                <button className="btn-cart-Left">
                  <img src={Left} alt="icon-left" className="icon-left" />{" "}
                  Вернуться назад
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
