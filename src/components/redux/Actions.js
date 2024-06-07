import { type } from "@testing-library/user-event/dist/type";
import {
  ADD_ACCESSORY_TO_CART,
  ADD_ALL_TO_CART,
  ADD_BESTSELLER_TO_CART,
  ADD_CAMERA_TO_CART,
  ADD_DRONE_TO_CART,
  ADD_NEWPRODUCTS_TO_CART,
  ADD_SALE_TO_CART,
  ADD_TO_CART,
  DECREASE_ITEM_QUANTITY,
  DELETE_PRODUCT_FROM_CART,
  INCREASE_ITEM_QUANTITY,
  LOGIN_USER,
  MAKE_ACCESSORIES,
  MAKE_ALL,
  MAKE_BESTSELLERS,
  MAKE_CAMERAS,
  MAKE_DRONES,
  MAKE_NEWPRODUCTS,
  MAKE_SALES,
  REGISTER_USER,
  SHOW_ACCESSORY_ITEMS,
  SHOW_ALL_ITEMS,
  SHOW_BESTSELLER_ITEMS,
  SHOW_CAMERA_ITEMS,
  SHOW_CART_ITEMS,
  SHOW_DRONE_ITEMS,
  SHOW_NEWPRODUCT_ITEMS,
  SHOW_SALE_ITEMS,
  SUBMIT_CART,
  SUBMIT_SHOPPING,
} from "./ActionsNames";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const addAllToCart = (id) => {
  return {
    type: ADD_ALL_TO_CART,
    payload: id,
  };
};

export const addDroneToCart = (id) => {
  return {
    type: ADD_DRONE_TO_CART,
    payload: id,
  };
};
export const addCameraToCart = (id) => {
  return {
    type: ADD_CAMERA_TO_CART,
    payload: id,
  };
};
export const addAccessoryToCart = (id) => {
  return {
    type: ADD_ACCESSORY_TO_CART,
    payload: id,
  };
};
export const addSaleToCart = (id) => {
  return {
    type: ADD_SALE_TO_CART,
    payload: id,
  };
};
export const addBestSellerToCart = (id) => {
  return {
    type: ADD_BESTSELLER_TO_CART,
    payload: id,
  };
};
export const addNewProductsToCart = (id) => {
  return {
    type: ADD_NEWPRODUCTS_TO_CART,
    payload: id,
  };
};
export const loginUser = (username, password) => {
  return {
    type: LOGIN_USER,
    info: "One user has succesfully logged into his/her account.",
    payload: { username, password },
  };
};

export const registerUser = (username, password, confirmPassword) => {
  return {
    type: REGISTER_USER,
    info: "New user has registered in your website.",
    payload: { username, password, confirmPassword },
  };
};

export const showAllItems = (id) => {
  return {
    type: SHOW_ALL_ITEMS,
    payload: id,
  };
};
export const showAccessoryItems = (id) => {
  return {
    type: SHOW_ACCESSORY_ITEMS,
    payload: id,
  };
};

export const showDroneItems = (id) => {
  return {
    type: SHOW_DRONE_ITEMS,
    payload: id,
  };
};

export const showCamerItems = (id) => {
  return {
    type: SHOW_CAMERA_ITEMS,
    payload: id,
  };
};

export const showSaleItems = (id) => {
  return {
    type: SHOW_SALE_ITEMS,
    payload: id,
  };
};
export const showBestSellerItems = (id) => {
  return {
    type: SHOW_BESTSELLER_ITEMS,
    payload: id,
  };
};
export const showNewProductItems = (id) => {
  return {
    type: SHOW_NEWPRODUCT_ITEMS,
    payload: id,
  };
};

export const showCartItems = (id) => {
  return {
    type: SHOW_CART_ITEMS,
    payload: id,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: INCREASE_ITEM_QUANTITY,
    payload: id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: DECREASE_ITEM_QUANTITY,
    payload: id,
  };
};

export const submitCart = () => {
  return {
    type: SUBMIT_CART,
  };
};

export const makeAll = () => {
  return {
    type: MAKE_ALL,
  };
};
export const makeDrones = () => {
  return {
    type: MAKE_DRONES,
  };
};
export const makeAccessories = () => {
  return {
    type: MAKE_ACCESSORIES,
  };
};
export const makeCameras = () => {
  return {
    type: MAKE_CAMERAS,
  };
};
export const makeSales = () => {
  return {
    type: MAKE_SALES,
  };
};
export const makeBestSeller = () => {
  return {
    type: MAKE_BESTSELLERS,
  };
};
export const makeNewProducts = () => {
  return {
    type: MAKE_NEWPRODUCTS,
  };
};

export const submitShopping = () => {
  return {
    type: SUBMIT_SHOPPING,
  };
};
