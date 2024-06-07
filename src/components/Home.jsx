import React, { Component } from "react";
import { loginUser, registerUser, showItem } from "./redux/Actions";
import { connect } from "react-redux";
import Layout from "./Layout";
import Item from "./Item";
import HomeItems from "./BestSellers";
import BestSellers from "./BestSellers";
import NewProduct from "./NewProduct";

class Home extends Component {
  constructor() {
    super();
    this.state = {};

    this.componentDidMount = () => {
      window.addEventListener("scroll", this.handleScroll);
    };
    this.componentWillUnmount = () => {
      window.removeEventListener("scroll", this.handleScroll);
    };
    this.handleScroll = () => {
      if (window.scrollY >= 1000) {
        document.getElementById("new_products").style.animation =
          "textmove 2.5s ease-in-out forwards";
      } else {
        document.getElementById("new_products").style.animation = "none";
      }

      if (window.scrollY >= 700) {
        document.getElementById("best_seller_text").style.animation =
          "textmove 2.5s ease-in-out forwards";
      } else {
        document.getElementById("best_seller_text").style.animation = "none";
      }
    };

    this.componentDidMount = () => {
      window.addEventListener("scroll", this.handleArrow);
    };
    this.componentWillUnmount = () => {
      window.removeEventListener("scroll", this.handleArrow);
    };

    this.handleArrow = () => {
      if (window.scrollY > 550) {
        let arrowUp = document.getElementById("bookmark_arrow");
        arrowUp.classList.add("arrow-visible");
        arrowUp.classList.remove("arrow-hidden");
      } else if (window.scrollY <= 550) {
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

    this.openDrones = () => {
      window.location.href = "/drones";
    };
    this.openCameras = () => {
      window.location.href = "/cameras";
    };
    this.openAccessories = () => {
      window.location.href = "/accessories";
    };
    this.handleQuickView = (itemId) => {
      this.props.showItem(itemId);
      window.location.href = `/item/${itemId}`;

      this.handleQuickView = (id) => {
        this.props.showItem(id);
        window.location.href = `/item/${id}`;
        <Item />;
      };
    };
  }

  render() {
    return (
      <div className="home-component">
        <div
          className="bookmark-goUp"
          onClick={this.pageUp}
          id="bookmark_arrow"
        >
          <i class="fa-solid fa-angle-up"></i>
        </div>
        <div className="home-intro">
          <div className="pro-drone-solution">
            <div className="elements-drone">
              <h2>Professional Drone Solutions</h2>
              <button onClick={this.openDrones} id="shop_now">
                Shop Now
              </button>
            </div>
          </div>
          <div className="home-intro-twice">
            <div className="thermal-camera">
              <h2>Thermal Camera Collection</h2>
              <button onClick={this.openCameras}>Shop Now</button>
            </div>
            <div className="thermal-camera drone-accessory">
              <h2>Essential Drone Accessories</h2>
              <button onClick={this.openAccessories}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="line-top-brands">
          <h5 className="brands-line">Top Brands</h5>
          <img
            src="https://static.wixstatic.com/media/ea26fd_b7edd789c1c34fe08446d677c5af509f~mv2.png/v1/fill/w_163,h_33,al_c,lg_1,q_85,enc_auto/ea26fd_b7edd789c1c34fe08446d677c5af509f~mv2.png"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/ea26fd_4657a584e76e4d2b8b9b58e26362ef32~mv2.png/v1/fill/w_176,h_53,al_c,lg_1,q_85,enc_auto/ea26fd_4657a584e76e4d2b8b9b58e26362ef32~mv2.png"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/ea26fd_5566dbcc66da4e9aa9d15db4f2474667~mv2.png/v1/fill/w_188,h_34,al_c,lg_1,q_85,enc_auto/ea26fd_5566dbcc66da4e9aa9d15db4f2474667~mv2.png"
            alt=""
          />
          <img
            className="x-pro-img"
            src="https://static.wixstatic.com/media/ea26fd_bf37d12b4d2a4dda94687829d7db5ab1~mv2.png/v1/fill/w_63,h_86,al_c,lg_1,q_85,enc_auto/ea26fd_bf37d12b4d2a4dda94687829d7db5ab1~mv2.png"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/ea26fd_9b3d17c9386742e8974a53f4a6fca9ba~mv2.png/v1/fill/w_163,h_38,al_c,lg_1,q_85,enc_auto/ea26fd_9b3d17c9386742e8974a53f4a6fca9ba~mv2.png"
            alt=""
          />
        </div>
        <h2 className="best-seller-text " id="best_seller_text">
          Our Bestsellers
        </h2>
        <div className="best-sellers">
          {this.props.bestSellers.map((bestSeller, index) => (
            <BestSellers
              index={index}
              img_url={bestSeller.img_url}
              name={bestSeller.name}
              price={bestSeller.price}
            />
          ))}
        </div>
        <h2 className="best-seller-text" id="new_products">
          New Products
        </h2>
        <div className="best-sellers">
          {this.props.newProducts.map((newProduct, index) => (
            <NewProduct
              index={index}
              img_url={newProduct.img_url}
              name={newProduct.name}
              price={newProduct.price}
            />
          ))}
        </div>
        <div className="testimonials-container">
          <h2>Testimonials</h2>
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/512/7350/7350737.png"
              alt=""
            />

            <p>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <h4> - Robert King - </h4>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/512/7350/7350737.png"
              alt=""
            />

            <p>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <h4> - VISION electronics - </h4>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/512/7350/7350737.png"
              alt=""
            />

            <p>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <h4> - Gary Lewis -</h4>
          </div>
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
    registerUser: () => {
      dispatch(registerUser());
    },
    loginUser: () => {
      dispatch(loginUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
