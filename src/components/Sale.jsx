import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addSaleToCart,
  addToCart,
  showItem,
  showSaleItems,
} from "./redux/Actions";
import { Link } from "react-router-dom";

class Sale extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div key={this.props.id} className="col-4">
        <Link to={`/sales/${this.props.index}`}>
          <div
            className="quick-view-element"
            onClick={() => this.props.showItem(this.props.index)}
          >
            Quick View
          </div>
        </Link>
        <p className="sale-text">Sale</p>
        <button
          className="addToCart-btn"
          onClick={() => this.props.addToCart(this.props.index)}
        >
          ADD TO CART <i class="fa-solid fa-cart-plus"></i>
        </button>
        <img src={this.props.img_url} alt="" />
        <h3>{this.props.name}</h3>
        <span>
          <p className="overline">{this.props.initial_price}</p>
        </span>
        <span>
          <p>${this.props.price}</p>
        </span>
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
      dispatch(showSaleItems(index));
    },
    addToCart: (index) => {
      dispatch(addSaleToCart(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sale);
