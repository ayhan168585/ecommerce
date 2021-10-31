import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";

function Cart() {
  const state = useContext(GlobalState);
  const [cart] = state.userAPI.cart;

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );
  return (
    <div>
      {cart.map((product) => (
        <div className="detail">
          <img src={product.images.url} alt="" />
          <div className="box-detail">
            <div className="row">
              <h2>{product.title}</h2>
              <h6>#id: {product.product_id}</h6>
            </div>
            <span>{product.price},00 TL.</span>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <p>Satılan:{product.sold}</p>
            <Link to="/cart" className="cart">
              Satın al
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
