import React, { Component } from "react";
import {
  addAccessoryToCart,
  addToCart,
  showAccessoryItems,
  showAllItems,
  showItem,
} from "./redux/Actions";
import { connect } from "react-redux";
import Item from "./Item";
import { Link } from "react-router-dom";

class Accessory extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div key={this.props.id} className="col-4">
        <Link to={`/accessories/${this.props.index}`}>
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
    showItem: (index) => {
      dispatch(showAccessoryItems(index));
    },
    addToCart: (index) => {
      dispatch(addAccessoryToCart(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accessory);
