import React, { Component } from "react";
import { addAllToCart, showAllItems, showItem } from "./redux/Actions";
import { connect } from "react-redux";
import Item from "./Item";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div key={this.props.id} className="col-4">
        <Link to={`/all/${this.props.index}`}>
          <div
            className="quick-view-element"
            onClick={() => this.props.showItem(this.props.index)}
          >
            Quick View
          </div>
        </Link>
        <button
          className="addToCart-btn"
          onClick={() => this.props.addToCart(this.props.index)}
        >
          ADD TO CART <i class="fa-solid fa-cart-plus"></i>
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
    addToCart: (index) => {
      dispatch(addAllToCart(index));
    },
    showItem: (index) => {
      dispatch(showAllItems(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
