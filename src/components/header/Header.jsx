import React from "react";
import "./Header.scss";
import LogoKross from "../../assets/svg/Logo.svg";
import Cart from "../../assets/svg/Cart.svg";
import Heart from "../../assets/svg/Heart.svg";
import User from "../../assets/svg/User.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { items } = useSelector((state) => state.carts);
  const subTotal = items.reduce((sub, item) => sub + item.price, 0);
  const taxRate = 0.05;
  const taxTotal = (subTotal * taxRate).toFixed(2);
  const total = (parseFloat(subTotal) + parseFloat(taxTotal)).toFixed(2);
  return (
    <>
      <div className="header ">
        <div className="header-bor container">
          <Link className="link-header" to="/">
            <div className="header-top">
              <img src={LogoKross} alt="" />
              <div>
                <h1>KROSS STORE</h1>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>
          </Link>
          <div className="header-bottom">
            <Link to="/cart" className="link-heart">
              <div className="header-bottom-item">
                <img src={Cart} alt="" />
                <p>{total} руб.</p>
              </div>
            </Link>
            <Link to="/wishList" className="link-heart">
              <div className="header-bottom-item">
                <img src={Heart} alt="" />
                <p>Закладки</p>
              </div>
            </Link>
            <Link to="/register" className="link-heart">
              <div className="header-bottom-item">
                <img src={User} alt="" />
                <p>Профиль</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
