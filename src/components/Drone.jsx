import React from "react";
import { connect } from "react-redux";
import { addDroneToCart, showDroneItems } from "./redux/Actions";
import Item from "./Item";
import { Link } from "react-router-dom";

function Drone(props) {
  return (
    <div className="col-4">
      <Link to={`/drones/${props.index}`}>
        <div
          className="quick-view-element"
          onClick={() => props.showItem(props.index)}
        >
          Quick View
        </div>
      </Link>
      <button
        className="addToCart-btn"
        onClick={() => props.addToCart(props.index)}
      >
        ADD TO CART <i class="fa-solid fa-cart-plus"></i>
      </button>
      <img src={props.img_url} alt="" />
      <h3>{props.name}</h3>
      <p>${props.price}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    showItem: (index) => {
      dispatch(showDroneItems(index));
    },
    addToCart: (index) => {
      dispatch(addDroneToCart(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drone);
