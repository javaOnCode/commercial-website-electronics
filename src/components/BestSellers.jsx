import React, { Component } from "react";
import {
  addBestSellerToCart,
  addToCart,
  showBestSellerItems,
  showItem,
} from "./redux/Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class BestSellers extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="home-item-div">
        <Link to={`/bestSellers/${this.props.index}`}>
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
      dispatch(showBestSellerItems(index));
    },
    addToCart: (index) => {
      dispatch(addBestSellerToCart(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestSellers);
