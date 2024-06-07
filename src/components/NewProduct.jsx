import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addNewProductsToCart,
  addToCart,
  showItem,
  showNewProductItems,
} from "./redux/Actions";
import { Link } from "react-router-dom";

class NewProduct extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="home-item-div">
        <Link to={`/newProducts/${this.props.index}`}>
          <div
            className="quick-view-element"
            onClick={() => this.props.showItem(this.props.index)}
          >
            Quick View
          </div>
        </Link>
        <button
          onClick={() => this.props.addToCart(this.props.index)}
          className="addToCart-btn"
        >
          Add to Cart <i class="fa-solid fa-cart-plus"></i>
        </button>
        <img src={this.props.img_url} alt="" />
        <h3>{this.props.name}</h3>
        <p>${this.props.price}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    showItem: (index) => {
      dispatch(showNewProductItems(index));
    },
    addToCart: (index) => {
      dispatch(addNewProductsToCart(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
