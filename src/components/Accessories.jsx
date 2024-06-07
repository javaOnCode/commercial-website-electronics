import { connect } from "react-redux";

import React, { Component } from "react";
import Accessory from "./Accessory";

class Accessories extends Component {
  constructor() {
    super();
    this.state = {};
    this.componentDidMount = () => {
      window.addEventListener("scroll", this.handleArrow);
    };
    this.componentWillUnmount = () => {
      window.removeEventListener("scroll", this.handleArrow);
    };

    this.handleArrow = () => {
      if (window.scrollY > 150) {
        let arrowUp = document.getElementById("bookmark_arrow");
        arrowUp.classList.add("arrow-visible");
        arrowUp.classList.remove("arrow-hidden");
      } else if (window.scrollY <= 150) {
        let arrowUp = document.getElementById("bookmark_arrow");
        arrowUp.classList.add("arrow-hidden");
        arrowUp.classList.remove("arrow-visible");
      }
    };
    this.pageUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }
  render() {
    return (
      <div className="accessories-container">
        <h2>ACCESSORIES</h2>
        <div
          className="bookmark-goUp"
          onClick={this.pageUp}
          id="bookmark_arrow"
        >
          <i class="fa-solid fa-angle-up"></i>
        </div>
        <div className="all-main-part">
          <div className="filter-div">
            <h3>Filter by</h3>
            <hr />
            <p>Price</p>
            <div className="category-container">
              <div>
                <input type="radio" name="price" id="radio_accessories_all" />
                <label htmlFor="radio_accessories_all">All</label>
              </div>
              <div>
                <input type="radio" name="price" id="radio_accessories_200" />
                <label htmlFor="radio_accessories_200">$0 - $200</label>
              </div>
              <div>
                <input type="radio" name="price" id="radio_accessories_500" />
                <label htmlFor="radio_price_500">$0 - $500</label>
              </div>
              <div>
                <input type="radio" name="price" id="radio_accessories_1000" />
                <label htmlFor="radio_accessories_1000">$0 - $1000</label>
              </div>
            </div>
            <hr />
          </div>
          <div className="products-container row">
            {this.props.accessories.map((accessory, index) => (
              <Accessory
                name={accessory.name}
                img_url={accessory.img_url}
                price={accessory.price}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Accessories);
