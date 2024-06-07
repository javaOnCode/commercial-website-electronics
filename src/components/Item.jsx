import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./redux/Actions";

class Item extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const itemChosen = JSON.parse(localStorage.getItem("itemChosen"));
    return (
      <div className="item-container">
        <img src={itemChosen.img_url} alt="" />
        <div className="item-inner-container">
          <h2>{itemChosen.name}</h2>
          <p>{itemChosen.description2}</p>
          <div className="price-container">
            <p>Final Price: ${itemChosen.price}</p>
            <p className="initial_price"> {itemChosen.initial_price}</p>
          </div>
          <button onClick={() => this.props.addToCart(this.props.index)}>
            ADD TO CART
          </button>
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
    addToCart: (index) => dispatch(addToCart(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
