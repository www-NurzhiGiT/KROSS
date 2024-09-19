import React from "react";
import "./style/wishList.scss";
import { useDispatch, useSelector } from "react-redux";
import X from "../assets/svg/x.svg";
import { removeWish } from "../redux/wishList/wishSlice";

function wishList() {
  const { item } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="wishList container">
      <h1 className="wish-h1">
        Wish List <span>({item.length})</span>
      </h1>
      <div className="wish-all">
        {item.map((x) => (
          <div className="wish">
            <img
              src={x.image}
              alt="KROSS-Images"
              className="image-product-logo"
            />
            <div>
              <h2>{x.name}</h2>
              <div className="wish-bottom">
                <div>
                  <h4>{x.price} руб.</h4>
                </div>
                <div>
                  <button
                    className="btn-wishList"
                    onClick={() => dispatch(removeWish(x.id))}
                  >
                    <img src={X} alt="image-x" className="x" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default wishList;
