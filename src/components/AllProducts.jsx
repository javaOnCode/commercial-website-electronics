import React, { Component } from "react";
import { connect } from "react-redux";
import {
  makeAccessories,
  makeAll,
  makeBestSeller,
  makeCameras,
  makeDrones,
  makeNewProducts,
  makeSales,
} from "./redux/Actions";
import Product from "./Product";
import Camera from "./Camera";
import Drone from "./Drone";
import Sale from "./Sale";
import Accessory from "./Accessory";
import BestSellers from "./BestSellers";
import Sales from "./Sales";

class AllProducts extends Component {
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
      if (window.scrollY > 500) {
        let arrowUp = document.getElementById("bookmark_arrow");
        arrowUp.classList.add("arrow-visible");
        arrowUp.classList.remove("arrow-hidden");
      } else if (window.scrollY <= 500) {
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
    switch (this.props.category) {
      case "All":
        return (
          <div className="all-products-container">
            <h2>ALL PRODUCTS</h2>
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
                <p>Category</p>
                <div className="category-container">
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_all"
                      onClick={this.props.makeAll}
                    />
                    <label htmlFor="radio_all">All</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_cameras"
                      onClick={this.props.makeCameras}
                    />
                    <label htmlFor="radio_cameras">Cameras</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_drones"
                      onClick={this.props.makeDrones}
                    />
                    <label htmlFor="radio_drones">Drones</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_accessories"
                      onClick={this.props.makeAccessories}
                    />
                    <label htmlFor="radio_accessories">Accessories</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_sales"
                      onClick={this.props.makeSales}
                    />
                    <label htmlFor="radio_sales">Sales</label>
                  </div>
                </div>
                <hr />
                <p>Price</p>
                <div className="category-container">
                  <div>
                    <input type="radio" name="price" id="radio_price_all" />
                    <label htmlFor="">All</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_200" />
                    <label htmlFor="radio_price_200">$0 - $200</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_500" />
                    <label htmlFor="radio_price_500">$0 - $500</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_1000" />
                    <label htmlFor="radio_price_1000">$0 - $1000</label>
                  </div>
                </div>
                <hr />
              </div>
              <div className="products-container row">
                {this.props.allItems.map((item, index) => (
                  <Product
                    name={item.name}
                    img_url={item.img_url}
                    price={item.price}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case "Drones":
        return (
          <div className="all-products-container">
            <h2>ALL PRODUCTS</h2>
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
                <p>Category</p>
                <div className="category-container">
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_all"
                      onClick={this.props.makeAll}
                    />
                    <label htmlFor="radio_all">All</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_cameras"
                      onClick={this.props.makeCameras}
                    />
                    <label htmlFor="radio_cameras">Cameras</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_drones"
                      onClick={this.props.makeDrones}
                    />
                    <label htmlFor="radio_drones">Drones</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_accessories"
                      onClick={this.props.makeAccessories}
                    />
                    <label htmlFor="radio_accessories">Accessories</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_sales"
                      onClick={this.props.makeSales}
                    />
                    <label htmlFor="radio_sales">Sales</label>
                  </div>
                </div>
                <hr />
                <p>Price</p>
                <div className="category-container">
                  <div>
                    <input type="radio" name="price" id="radio_price_all" />
                    <label htmlFor="">All</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_200" />
                    <label htmlFor="radio_price_200">$0 - $200</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_500" />
                    <label htmlFor="radio_price_500">$0 - $500</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_1000" />
                    <label htmlFor="radio_price_1000">$0 - $1000</label>
                  </div>
                </div>
                <hr />
              </div>
              <div className="products-container row">
                {this.props.drones.map((item, index) => (
                  <Drone
                    name={item.name}
                    img_url={item.img_url}
                    price={item.price}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case "Cameras":
        return (
          <div className="all-products-container">
            <h2>ALL PRODUCTS</h2>
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
                <p>Category</p>
                <div className="category-container">
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_all"
                      onClick={this.props.makeAll}
                    />
                    <label htmlFor="radio_all">All</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_cameras"
                      onClick={this.props.makeCameras}
                    />
                    <label htmlFor="radio_cameras">Cameras</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_drones"
                      onClick={this.props.makeDrones}
                    />
                    <label htmlFor="radio_drones">Drones</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_accessories"
                      onClick={this.props.makeAccessories}
                    />
                    <label htmlFor="radio_accessories">Accessories</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_sales"
                      onClick={this.props.makeSales}
                    />
                    <label htmlFor="radio_sales">Sales</label>
                  </div>
                </div>
                <hr />
                <p>Price</p>
                <div className="category-container">
                  <div>
                    <input type="radio" name="price" id="radio_price_all" />
                    <label htmlFor="">All</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_200" />
                    <label htmlFor="radio_price_200">$0 - $200</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_500" />
                    <label htmlFor="radio_price_500">$0 - $500</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_1000" />
                    <label htmlFor="radio_price_1000">$0 - $1000</label>
                  </div>
                </div>
                <hr />
              </div>
              <div className="products-container row">
                {this.props.cameras.map((item, index) => (
                  <Camera
                    name={item.name}
                    img_url={item.img_url}
                    price={item.price}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case "Sales":
        return (
          <div className="all-products-container">
            <h2>ALL PRODUCTS</h2>
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
                <p>Category</p>
                <div className="category-container">
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_all"
                      onClick={this.props.makeAll}
                    />
                    <label htmlFor="radio_all">All</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_cameras"
                      onClick={this.props.makeCameras}
                    />
                    <label htmlFor="radio_cameras">Cameras</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_drones"
                      onClick={this.props.makeDrones}
                    />
                    <label htmlFor="radio_drones">Drones</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_accessories"
                      onClick={this.props.makeAccessories}
                    />
                    <label htmlFor="radio_accessories">Accessories</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_sales"
                      onClick={this.props.makeSales}
                    />
                    <label htmlFor="radio_sales">Sales</label>
                  </div>
                </div>
                <hr />
                <p>Price</p>
                <div className="category-container">
                  <div>
                    <input type="radio" name="price" id="radio_price_all" />
                    <label htmlFor="">All</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_200" />
                    <label htmlFor="radio_price_200">$0 - $200</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_500" />
                    <label htmlFor="radio_price_500">$0 - $500</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_1000" />
                    <label htmlFor="radio_price_1000">$0 - $1000</label>
                  </div>
                </div>
                <hr />
              </div>
              <div className="products-container row">
                {this.props.sales.map((item, index) => (
                  <Sale
                    name={item.name}
                    img_url={item.img_url}
                    price={item.price}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case "Accessories":
        return (
          <div className="all-products-container">
            <h2>ALL PRODUCTS</h2>
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
                <p>Category</p>
                <div className="category-container">
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_all"
                      onClick={this.props.makeAll}
                    />
                    <label htmlFor="radio_all">All</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_cameras"
                      onClick={this.props.makeCameras}
                    />
                    <label htmlFor="radio_cameras">Cameras</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_drones"
                      onClick={this.props.makeDrones}
                    />
                    <label htmlFor="radio_drones">Drones</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_accessories"
                      onClick={this.props.makeAccessories}
                    />
                    <label htmlFor="radio_accessories">Accessories</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_sales"
                      onClick={this.props.makeSales}
                    />
                    <label htmlFor="radio_sales">Sales</label>
                  </div>
                </div>
                <hr />
                <p>Price</p>
                <div className="category-container">
                  <div>
                    <input type="radio" name="price" id="radio_price_all" />
                    <label htmlFor="">All</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_200" />
                    <label htmlFor="radio_price_200">$0 - $200</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_500" />
                    <label htmlFor="radio_price_500">$0 - $500</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_1000" />
                    <label htmlFor="radio_price_1000">$0 - $1000</label>
                  </div>
                </div>
                <hr />
              </div>
              <div className="products-container row">
                {this.props.accessories.map((item, index) => (
                  <Accessory
                    name={item.name}
                    img_url={item.img_url}
                    price={item.price}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        );

        return (
          <div className="all-products-container">
            <h2>ALL PRODUCTS</h2>
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
                <p>Category</p>
                <div className="category-container">
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_all"
                      onClick={this.props.makeAll}
                    />
                    <label htmlFor="radio_all">All</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_cameras"
                      onClick={this.props.makeCameras}
                    />
                    <label htmlFor="radio_cameras">Cameras</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_drones"
                      onClick={this.props.makeDrones}
                    />
                    <label htmlFor="radio_drones">Drones</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_accessories"
                      onClick={this.props.makeAccessories}
                    />
                    <label htmlFor="radio_accessories">Accessories</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="category"
                      id="radio_sales"
                      onClick={this.props.makeSales}
                    />
                    <label htmlFor="radio_sales">Sales</label>
                  </div>
                </div>
                <hr />
                <p>Price</p>
                <div className="category-container">
                  <div>
                    <input type="radio" name="price" id="radio_price_all" />
                    <label htmlFor="">All</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_200" />
                    <label htmlFor="radio_price_200">$0 - $200</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_500" />
                    <label htmlFor="radio_price_500">$0 - $500</label>
                  </div>
                  <div>
                    <input type="radio" name="price" id="radio_price_1000" />
                    <label htmlFor="radio_price_1000">$0 - $1000</label>
                  </div>
                </div>
                <hr />
              </div>
              <div className="products-container row">
                {this.props.bestSellers.map((item, index) => (
                  <BestSellers
                    name={item.name}
                    img_url={item.img_url}
                    price={item.price}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return this.props;
    }
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeAll: () => dispatch(makeAll()),
    makeDrones: () => dispatch(makeDrones()),
    makeCameras: () => dispatch(makeCameras()),
    makeSales: () => dispatch(makeSales()),
    makeAccessories: () => dispatch(makeAccessories()),
    makeNewProducts: () => dispatch(makeNewProducts()),
    makeBestSeller: () => dispatch(makeBestSeller()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);

// return (
//   <div className="all-products-container">
//     <h2>ALL PRODUCTS</h2>
//     <div
//       className="bookmark-goUp"
//       onClick={this.pageUp}
//       id="bookmark_arrow"
//     >
//       <i class="fa-solid fa-angle-up"></i>
//     </div>
//     <div className="all-main-part">
//       <div className="filter-div">
//         <h3>Filter by</h3>
//         <hr />
//         <p>Category</p>
//         <div className="category-container">
//           <div>
//             <input
//               type="radio"
//               name="category"
//               id="radio_all"
//               onClick={this.makeAll}
//             />
//             <label htmlFor="radio_all">All</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="category"
//               id="radio_drones"
//               onClick={this.makeDrones}
//             />
//             <label htmlFor="radio_drones">Drones</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="category"
//               id="radio_cameras"
//               onClick={this.makeCameras}
//             />
//             <label htmlFor="radio_cameras">Cameras</label>
//           </div>
//           <div>
//             <input type="radio" name="category" id="radio_accessories" />
//             <label htmlFor="radio_accessories">Accessories</label>
//           </div>
//           <div>
//             <input type="radio" name="category" id="radio_sales" />
//             <label htmlFor="radio_sales">Sales</label>
//           </div>
//           <div>
//             <input type="radio" name="category" id="radio_bestSellers" />
//             <label htmlFor="radio_bestSellers">Best Sellers</label>
//           </div>
//           <div>
//             <input type="radio" name="category" id="radio_newProducts" />
//             <label htmlFor="radio_newProducts">New Products</label>
//           </div>
//         </div>
//         <hr />
//         <p>Price</p>
//         <div className="category-container">
//           <div>
//             <input type="radio" name="price" id="radio_price_all" />
//             <label htmlFor="">All</label>
//           </div>
//           <div>
//             <input type="radio" name="price" id="radio_price_200" />
//             <label htmlFor="radio_price_200">$0 - $200</label>
//           </div>
//           <div>
//             <input type="radio" name="price" id="radio_price_500" />
//             <label htmlFor="radio_price_500">$0 - $500</label>
//           </div>
//           <div>
//             <input type="radio" name="price" id="radio_price_1000" />
//             <label htmlFor="radio_price_1000">$0 - $1000</label>
//           </div>
//         </div>
//         <hr />
//       </div>
//       <div className="products-container row">
//         {this.props.allItems.map((item, index) => (
//           <Product
//             name={item.name}
//             img_url={item.img_url}
//             price={item.price}
//             index={index}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// );
