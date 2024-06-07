import React, { Component } from "react";
import { connect } from "react-redux";
import { addCameraToCart, showCamerItems } from "./redux/Actions";
import { Link } from "react-router-dom";

class Camera extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="col-4">
        <Link to={`/cameras/${this.props.index}`}>
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
      dispatch(showCamerItems(index));
    },
    addToCart: (index) => {
      dispatch(addCameraToCart(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
