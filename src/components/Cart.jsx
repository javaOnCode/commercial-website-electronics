import React, { Component } from "react";
import { connect } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  showCartItems,
} from "./redux/Actions";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor() {
    super();
    this.state = {};

    this.activatePromo = () => {
      alert("Invalid Promo Code. \nPlease try the valid one.");
      document.getElementById("promo_input").value = "";
    };

    this.submitCart = () => {};
  }
  render() {
    return (
      <div className="cart-container">
        <div className="cart-inner-container">
          {this.props.cart.map((cartItem, index) => (
            <div className="cart-item-container" key={index}>
              <Link to={`/cart/${index}`}>
                <img
                  src={cartItem.img_url}
                  onClick={() => this.props.showItem(index)}
                />
              </Link>
              <div>
                <h3>{cartItem.name}</h3>
                <p className="description-p">{cartItem.description}</p>
                <p className="mt-3">
                  <i class="fa-solid fa-truck-fast mr-1"></i> Approx. shipping
                  in 2 hours
                </p>
                <div className="item-quantity-calc">
                  <button onClick={() => this.props.decreaseQuantity(index)}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <>{cartItem.quantity}</>
                  <button onClick={() => this.props.increaseQuantity(index)}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <p className="sale-price item-price">
                  {cartItem.initial_price}
                </p>
                <p className="item-price">${cartItem.price}</p>
                <button
                  className="trash-btn"
                  onClick={() => this.props.deleteProduct(index)}
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary-container">
          <Link to="/cartSubmission">
            <button onClick={this.submitCart}>
              SUBMIT CART <i class="fa-solid fa-angle-right"></i>
            </button>
          </Link>
          <div className="total-summary">
            <h3>
              <i class="fa-solid fa-money-bills"></i> Cart Summary
            </h3>
            <p>
              Item Total: ${this.props.cartTotalAmount} <br /> Kargo price: $
              {this.props.kargoPrice}
            </p>

            <hr />
            <p>Total Amount: ${this.props.cartFinalAmount}</p>
          </div>
          <div className="promo-container">
            <h3>Promo Code</h3>
            <div id="promo_div">
              <input type="text" id="promo_input" placeholder="JBLK32NM" />
              <button className="promo-btn" onClick={this.activatePromo}>
                Apply
              </button>
            </div>
          </div>
          <Link to="/cartSubmission">
            <button onClick={this.submitCart}>
              SUBMIT CART <i class="fa-solid fa-angle-right"></i>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (index) => {
      dispatch(deleteProduct(index));
    },
    showItem: (index) => dispatch(showCartItems(index)),
    increaseQuantity: (index) => {
      dispatch(increaseQuantity(index));
    },
    decreaseQuantity: (index) => {
      dispatch(decreaseQuantity(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
