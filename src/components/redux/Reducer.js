import blackDrone from "../../images/proDroneImg4_home.webp";
import greyDrone from "../../images/proDrone1_home.webp";
import whiteDrone from "../../images/proDroneImg2_home.webp";
import blackRedDrone from "../../images/proDroneImg3_home.webp";
import orangeDrone from "../../images/orangeDrone7_home.webp";
import newDrone from "../../images/newDrone8_home.webp";
import spiderDrone from "../../images/spiderDrone9_home.webp";
import twoDrone from "../../images/twoDrone10_home.webp";
import headDrone from "../../images/headDrone11_home.webp";
import proCamera1 from "../../images/proCameraImg1_home.webp";
import proCamera2 from "../../images/proCameraImg2_home.webp";
import whiteCamera from "../../images/whiteCamera3_home.webp";
import glassCamera from "../../images/cameraGlass4_home.webp";
import sideCamera from "../../images/cameraSide5_home.webp";
import HorizontalCamera from "../../images/horizontalCamera6_home.webp";
import leftSide from "../../images/leftrotateCamera7_home.webp";
import surveillanceCamera from "../../images/surveillanceCamera8_home.webp";
import oldCamera from "../../images/oldCamera9_home.webp";
import controllerDrone1 from "../../images/proDroneController1_home.webp";
import cameraGlass from "../../images/proCameraGlass1_home.webp";
import droneBag from "../../images/proDroneBagImg1_home.webp";
import controllerDrone2 from "../../images/droneController2_home.webp";
import droneVentil from "../../images/droneVentil_home.webp";
import droneBattery from "../../images/droneBattery_home.webp";
import dronBag2 from "../../images/droneBag2_home.webp";
import memoryCard from "../../images/droneStorageCard1_home.webp";
import controllerDrone3 from "../../images/droneController3_home.webp";

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
  SUBMIT_SHOPPING,
} from "./ActionsNames";

export const initial_state = {
  drones: [
    {
      id: "0",
      img_url: blackDrone,
      name: "Sleek Drone",
      price: 1450,
      cart_price: 1450,
      description:
        "High-performance black drone for aerial photography and videography.",
      description2:
        "Optimized for professional content creation with precision flight controls and advanced camera features, ensuring exceptional aerial footage and imagery.",
      quantity: 1,
    },
    {
      id: "1",
      img_url: greyDrone,
      name: "Professional Drone",
      price: 2050,
      cart_price: 2050,
      description:
        "Sleek grey drone with advanced stabilization features for smooth footage.",
      description2:
        "Engineered for professional cinematography, ensuring stable and cinematic shots in various flying conditions. Perfect for capturing breathtaking aerial views and landscapes.",
      quantity: 1,
    },
    {
      id: "2",
      img_url: whiteDrone,
      name: "Compact Drone",
      price: 1750,
      cart_price: 1750,
      description:
        "White drone equipped with a powerful camera for capturing stunning images.",
      description2:
        "Compact design with powerful camera capabilities, perfect for on-the-go aerial photography and videography. Ideal for capturing detailed and immersive aerial imagery.",
      quantity: 1,
    },
    {
      id: "3",
      img_url: blackRedDrone,
      name: "High-Performance Drone",
      price: 2100,
      cart_price: 2100,
      description:
        "Black and red drone with customizable flight modes for professional aerial photography.",
      description2:
        "Engineered for high-speed maneuvers and advanced photography settings, ideal for professional content creators. Capture stunning aerial shots with precision and clarity.",
      quantity: 1,
    },
    {
      id: "4",
      img_url: orangeDrone,
      name: "Vibrant Drone",
      price: 1885,
      cart_price: 1885,
      description:
        "Vibrant orange drone designed for both indoor and outdoor flying experiences.",
      description2:
        "Bold color design with versatile performance, suitable for capturing stunning footage in various environments. Elevate your aerial photography with vibrant and dynamic shots.",
      quantity: 1,
    },
    {
      id: "5",
      img_url: newDrone,
      name: "Cutting-Edge Drone",
      price: 1600,
      cart_price: 1600,
      description:
        "Cutting-edge drone with intelligent flight modes and obstacle avoidance technology.",
      description2:
        "Packed with advanced features for safe and efficient flights, ensuring smooth operation in any environment. Perfect for capturing dynamic and immersive aerial experiences.",
      quantity: 1,
    },
    {
      id: "6",
      img_url: spiderDrone,
      name: "Spider-like Drone",
      price: 2250,
      cart_price: 2250,
      description:
        "Spider-like drone with multiple rotors for increased stability and maneuverability.",
      description2:
        "Innovative design for agile flights and precise control, offering exceptional stability in challenging conditions. Capture unique perspectives with confidence and precision.",
      quantity: 1,
    },
    {
      id: "7",
      img_url: twoDrone,
      name: "Dual-Rotor Drone",
      price: 700,
      cart_price: 700,
      description:
        "Dual-rotor drone suitable for beginners and experienced pilots alike.",
      description2:
        "Easy-to-fly design with reliable performance, perfect for honing piloting skills and capturing aerial footage with ease. Ideal for both beginners and experienced pilots.",
      quantity: 1,
    },
    {
      id: "8",
      img_url: headDrone,
      name: "Unique Head Drone",
      price: 1320,
      cart_price: 1320,
      description:
        "Drone with a unique head-like design and high-definition camera for aerial exploration.",
      description2:
        "Distinctive design combined with high-definition camera capabilities, ideal for exploring and capturing unique aerial perspectives. Unlock new possibilities in aerial photography and exploration.",
      quantity: 1,
    },
  ],
  cameras: [
    {
      id: "9",
      img_url: proCamera1,
      name: "Advanced Camera",
      price: 360,
      cart_price: 360,
      description:
        "Professional-grade camera with adjustable settings for capturing stunning photographs.",
      description2:
        "The Advanced Camera boasts professional-grade features, delivering exceptional control and image quality for photographers seeking precision and excellence in their photography endeavors.",
      quantity: 1,
    },
    {
      id: "10",
      img_url: proCamera2,
      name: "Compact Camera",
      price: 400,
      cart_price: 400,
      description:
        "Advanced camera with 4K video recording capabilities for professional videography projects.",
      description2:
        "Compact yet powerful, this camera excels in capturing high-resolution videos, making it indispensable for professional videographers and filmmakers seeking portability without compromising quality.",
      quantity: 1,
    },
    {
      id: "11",
      img_url: whiteCamera,
      name: "Professional Camera",
      price: 110,
      cart_price: 110,
      description:
        "Compact white camera with a wide-angle lens for capturing panoramic shots.",
      description2:
        "Designed for versatility, this camera's wide-angle lens and compact form factor make it an excellent choice for capturing expansive panoramic shots with exceptional clarity and detail.",
      quantity: 1,
    },
    {
      id: "12",
      img_url: glassCamera,
      name: "Underwater Camera",
      price: 330,
      cart_price: 330,
      description:
        "Glass-encased camera designed for underwater photography and extreme environments.",
      description2:
        "Engineered for rugged reliability, this underwater camera features a durable glass enclosure, ensuring clear and vivid images even in the most challenging underwater conditions, making it a must-have for aquatic adventurers.",
      quantity: 1,
    },
    {
      id: "13",
      img_url: sideCamera,
      name: "Side-Mounted Camera",
      price: 220,
      cart_price: 220,
      description:
        "Side-mounted camera suitable for surveillance and monitoring applications.",
      description2:
        "Versatile and discreet, this side-mounted camera offers effective surveillance and monitoring capabilities, making it an ideal choice for various security and observational needs in both professional and personal settings.",
      quantity: 1,
    },
    {
      id: "14",
      img_url: HorizontalCamera,
      name: "Horizontal Camera",
      price: 160,
      cart_price: 160,
      description:
        "Horizontal camera with wide dynamic range for capturing detailed images in varying lighting conditions.",
      description2:
        "With its wide dynamic range and horizontal orientation, this camera excels in capturing detailed images across various lighting conditions, ensuring exceptional image quality and versatility for photographers.",
      quantity: 1,
    },
    {
      id: "15",
      img_url: leftSide,
      name: "Left-Side Camera",
      price: 110,
      cart_price: 110,
      description:
        "Left-sided camera designed for installation on vehicles and drones for capturing footage from unique angles.",
      description2:
        "Tailored for unique perspectives, this left-sided camera is perfect for installation on vehicles and drones, allowing users to capture dynamic footage from unconventional angles, expanding creative possibilities in photography and videography.",
      quantity: 1,
    },
    {
      id: "16",
      img_url: surveillanceCamera,
      name: "Surveillance Camera",
      price: 220,
      cart_price: 220,
      description:
        "Surveillance camera with night vision capabilities for monitoring properties and outdoor areas.",
      description2:
        "Equipped with night vision capabilities, this surveillance camera offers reliable monitoring for properties and outdoor areas, ensuring round-the-clock surveillance and peace of mind for homeowners and business owners alike.",
      quantity: 1,
    },
    {
      id: "17",
      img_url: oldCamera,
      name: "Vintage-Style Camera",
      price: 200,
      cart_price: 200,
      description:
        "Vintage-style camera with modern features for capturing retro-inspired photographs.",
      description2:
        "Combining vintage aesthetics with modern functionality, this camera offers retro-inspired photography with contemporary convenience, making it a delightful choice for photographers seeking nostalgic charm and cutting-edge performance.",
      quantity: 1,
    },
  ],
  accessories: [
    {
      id: "18",
      img_url: controllerDrone1,
      name: "Drone Controller",
      price: 110,
      cart_price: 110,
      description:
        "Drone controller with ergonomic design and precise controls for piloting drones with ease.",
      quantity: 1,
      description2:
        "Engineered for effortless piloting, this ergonomic drone controller offers precise controls, ensuring smooth and intuitive handling for pilots of all skill levels, enhancing the flying experience.",
    },
    {
      id: "19",
      img_url: cameraGlass,
      name: "Camera Glass Cover",
      price: 180,
      cart_price: 180,
      description:
        "Protective glass cover for cameras to shield against scratches and impacts during outdoor activities.",
      quantity: 1,
      description2:
        "Safeguard your camera lens with this durable glass cover, providing reliable protection against scratches and impacts during outdoor photography adventures, ensuring pristine image quality and longevity for your equipment.",
    },
    {
      id: "20",
      img_url: droneBag,
      name: "Drone Bag",
      price: 118,
      cart_price: 118,
      description:
        "Durable bag designed specifically for transporting drones and accessories safely and conveniently.",
      quantity: 1,
      description2:
        "Travel with confidence using this durable drone bag, meticulously crafted to provide secure and convenient storage for your drone and accessories, ensuring hassle-free transportation and protection on all your adventures.",
    },
    {
      id: "21",
      img_url: controllerDrone2,
      name: "Enhanced Drone Controller",
      price: 110,
      cart_price: 110,
      description:
        "Second version of drone controller with enhanced connectivity features and extended battery life.",
      quantity: 1,
      description2:
        "Experience next-level control with this enhanced drone controller, featuring advanced connectivity options and extended battery life, empowering pilots with unparalleled precision and endurance for longer and more immersive flights.",
    },
    {
      id: "22",
      img_url: droneVentil,
      name: "Drone Ventilation Accessory",
      price: 9,
      cart_price: 9,
      description:
        "Drone ventilation accessory to prevent overheating during prolonged flight sessions.",
      quantity: 1,
      description2:
        "Keep your drone cool and performing optimally with this ventilation accessory, designed to prevent overheating during extended flight sessions, ensuring reliable and consistent performance in any conditions.",
    },
    {
      id: "23",
      img_url: droneBattery,
      name: "Drone Battery Pack",
      price: 90,
      cart_price: 90,
      description:
        "Additional battery pack for drones to extend flight time and maximize performance.",
      quantity: 1,
      description2:
        "Maximize your drone's performance with this additional battery pack, extending flight time and enabling longer and more productive aerial missions, ensuring uninterrupted exploration and creativity in the skies.",
    },
    {
      id: "24",
      img_url: dronBag2,
      name: "Compact Drone Bag",
      price: 18,
      cart_price: 18,
      description:
        "Compact bag designed for storing and carrying drones on outdoor adventures and travel expeditions.",
      quantity: 1,
      description2:
        "Travel light and organized with this compact drone bag, offering convenient storage and portability for your drone on outdoor adventures and travel expeditions, ensuring easy and hassle-free transportation wherever you go.",
    },
    {
      id: "25",
      img_url: memoryCard,
      name: "High-Capacity Memory Card",
      price: 78,
      cart_price: 78,
      description:
        "High-capacity memory card for storing photos and videos captured by cameras and drones.",
      quantity: 1,
      description2:
        "Capture every moment with this high-capacity memory card, providing ample storage space for photos and videos captured by cameras and drones, ensuring you never miss a shot during your photography and videography adventures.",
    },
    {
      id: "26",
      img_url: controllerDrone3,
      name: "Advanced Drone Controller",
      price: 150,
      cart_price: 150,
      description:
        "Advanced drone controller with precise controls and extended range for professional pilots.",
      quantity: 1,
      description2:
        "Elevate your piloting experience with this advanced drone controller, offering precise controls and extended range, empowering professional pilots with unmatched precision and control for capturing breathtaking aerial footage and executing complex maneuvers with ease.",
    },
  ],
  sales: [
    {
      id: "27",
      img_url: controllerDrone1,
      name: "Professional Drone Controller",
      initial_price: "$200",
      cart_price: 110,
      price: 110,
      description:
        "Precise control for compatible drones. Ergonomic design, customizable buttons.",
      quantity: 1,
      description2:
        "Enhance your drone piloting experience with this professional controller, offering precise control, ergonomic design, and customizable buttons for optimal performance and ease of use.",
    },
    {
      id: "28",
      img_url: proCamera1,
      name: "Advanced Camera",
      initial_price: "$400",
      cart_price: 360,
      price: 360,
      description:
        "High-quality capture in compact design. Advanced autofocus, image processing.",
      quantity: 1,
      description2:
        "Capture stunning images with this advanced camera, featuring compact design, advanced autofocus, and image processing capabilities, delivering high-quality results in any shooting conditions.",
    },
    {
      id: "29",
      img_url: cameraGlass,
      name: "Camera Glass Cover",
      initial_price: "$220",
      price: 180,
      cart_price: 180,
      description:
        "Additional lens protection. High-quality materials, safeguard from scratches.",
      quantity: 1,
      description2:
        "Protect your camera lens with this durable glass cover, crafted from high-quality materials to safeguard against scratches, ensuring pristine image quality and longevity for your equipment.",
    },
    {
      id: "30",
      img_url: proCamera2,
      name: "Compact 4K Camera",
      initial_price: "$470",
      price: 400,
      cart_price: 400,
      description:
        "Stunning 4K recording. Compact, versatile, intuitive controls.",
      quantity: 1,
      description2:
        "Record breathtaking 4K videos with this compact camera, offering versatile features and intuitive controls for capturing exceptional footage, making it the perfect choice for videographers seeking portability and performance.",
    },
    {
      id: "31",
      img_url: blackRedDrone,
      name: "High-Performance Drone",
      initial_price: "$2250",
      price: 2100,
      cart_price: 2100,
      description:
        "Engineered for speed, agility. Advanced flight modes, intelligent features.",
      quantity: 1,
      description2:
        "Experience unrivaled performance with this high-performance drone, engineered for speed and agility, featuring advanced flight modes and intelligent features for professional aerial photography and videography.",
    },
    {
      id: "32",
      img_url: orangeDrone,
      name: "Compact Orange Drone",
      initial_price: "$2125",
      price: 1885,
      cart_price: 1885,
      description:
        "Sleek design, powerful performance. Perfect for aerial enthusiasts.",
      quantity: 1,
      description2:
        "Embrace aerial adventures with this compact orange drone, boasting a sleek design and powerful performance, making it the ideal choice for enthusiasts seeking excitement and versatility in their flying experience.",
    },
  ],
  bestSellers: [
    {
      id: "33",
      img_url: greyDrone,
      name: "Grey Professional Drone",
      price: 2050,
      cart_price: 2050,
      description:
        "The Professional Drone is designed for professional photography. It features advanced stabilization technology and high-resolution camera capabilities.",
      quantity: 1,
      description2:
        "Elevate your aerial photography with this professional-grade drone, offering advanced stabilization technology and high-resolution camera capabilities, ensuring exceptional image quality and stability for professional-grade results.",
    },
    {
      id: "34",
      img_url: proCamera1,
      name: "Advanced Camera",
      price: 360,
      cart_price: 360,
      description:
        "The Advanced Camera offers high-quality image capture in a compact design. With advanced autofocus and image processing features.",
      quantity: 1,
      description2:
        "Unlock your creative potential with this advanced camera, combining high-quality image capture with compact design, advanced autofocus, and image processing features, ensuring superior results in any shooting conditions.",
    },
    {
      id: "35",
      img_url: whiteDrone,
      name: "White Compact Drone",
      price: 1750,
      cart_price: 1750,
      description:
        "The White Compact Drone combines portability with powerful performance. Its sleek design and intuitive controls make it ideal for capturing stunning aerial footage.",
      quantity: 1,
      description2:
        "Experience the perfect blend of portability and performance with this white compact drone, featuring a sleek design and intuitive controls, making it an ideal choice for capturing breathtaking aerial footage with ease and precision.",
    },
    {
      id: "36",
      img_url: droneBag,
      name: "High-capacity Drone Bag",
      price: 120,
      cart_price: 120,
      description:
        "The Drone Bag provides ample storage space for your drone, accessories, and other essentials. Its durable construction offer maximum protection during transport.",
      quantity: 1,
      description2:
        "Travel with confidence using this high-capacity drone bag, offering ample storage space and durable construction for maximum protection of your drone, accessories, and essentials during transport, ensuring peace of mind on every adventure.",
    },
    {
      id: "37",
      img_url: blackRedDrone,
      name: "High-Performance Drone",
      price: 2100,
      cart_price: 2100,
      description:
        "The High-Performance Drone is engineered for speed and agility. With advanced flight modes and intelligent features, it delivers an unparalleled flying experience.",
      quantity: 1,
      description2:
        "Unleash your aerial capabilities with this high-performance drone, engineered for speed and agility, featuring advanced flight modes and intelligent features for an unparalleled flying experience, perfect for enthusiasts and professionals alike.",
    },
  ],
  newProducts: [
    {
      id: "38",
      img_url: proCamera2,
      name: "Compact 4K Camera",
      price: 400,
      cart_price: 400,
      description:
        "The Compact 4K Camera combines stunning 4K video recording with compact portability. Its versatile features and intuitive controls make it a must-have for any videographer.",
      quantity: 1,
      description2:
        "Capture breathtaking 4K videos with this compact camera, offering versatile features and intuitive controls for seamless operation, making it an essential tool for videographers seeking portability and high-quality performance in their projects.",
    },
    {
      id: "39",
      img_url: blackDrone,
      name: "Sleek Black Drone",
      price: 1450,
      cart_price: 1450,
      description:
        "The Sleek Black Drone boasts a stylish design and powerful performance. Equipped with advanced flight modes and obstacle avoidance technology, it's perfect for aerial enthusiasts.",
      quantity: 1,
      description2:
        "Elevate your aerial adventures with this sleek black drone, featuring stylish design and powerful performance, equipped with advanced flight modes and obstacle avoidance technology for an exhilarating flying experience.",
    },
    {
      id: "40",
      img_url: controllerDrone1,
      name: "Drone Controller",
      price: 110,
      cart_price: 110,
      description:
        "The Drone Controller offers precise control and intuitive navigation for compatible drones. Ergonomic design provide seamless flying experience.",
      quantity: 1,
      description2:
        "Take control of your drone with this intuitive controller, offering precise navigation and ergonomic design for a seamless flying experience, ensuring effortless piloting and precise maneuvers for pilots of all skill levels.",
    },
    {
      id: "41",
      img_url: cameraGlass,
      name: "Camera Glass Cover",
      price: 180,
      cart_price: 180,
      description:
        "The Camera Glass Cover provides additional protection for your camera lens. Made from high-quality materials, it helps safeguard your lens from scratches, dust, and impact.",
      quantity: 1,
      description2:
        "Protect your camera lens with this durable glass cover, crafted from high-quality materials to safeguard against scratches, dust, and impact, ensuring pristine image quality and longevity for your equipment.",
    },
    {
      id: "42",
      img_url: twoDrone,
      name: "Dual-Rotor Drone",
      price: 700,
      cart_price: 700,
      description:
        "The Dual-Rotor Drone features a unique dual-rotor design for enhanced stability and maneuverability. With dual cameras and intelligent flight modes, it's perfect for capturing dynamic aerial footage.",
      quantity: 1,
      description2:
        "Experience enhanced stability and maneuverability with this dual-rotor drone, featuring a unique design and dual cameras, along with intelligent flight modes for capturing dynamic aerial footage with ease and precision.",
    },
  ],
  category: "All",
  allItems: [],
  cart: [],
  cartQuantity: 0,
  cartTotalAmount: 0,
  kargoPrice: 0,
  cartFinalAmount: 0,
  users: [],
  loggedInUser: null,
  itemChosen: null,
};

initial_state.allItems = [
  ...initial_state.drones,
  ...initial_state.cameras,
  ...initial_state.accessories,
];

export const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    case LOGIN_USER:
      const usersSaved = JSON.parse(localStorage.getItem("users"));
      const loggedInUser = usersSaved.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );
      if (loggedInUser) {
        alert(
          "You succesfully logged into your account! \nNow, you can accomplish any actions"
        );
        return { ...state, loggedInUser: action.payload };
      } else {
        alert("An error occurred while loggin in. \nUser not found...");
        return state;
      }
    case ADD_TO_CART:
      if (state.loggedInUser) {
        const itemToAdd = JSON.parse(localStorage.getItem("itemChosen"));
        const updatedTotalAmount = state.cartTotalAmount + itemToAdd.price;
        const updatedKargoPrice = state.kargoPrice + updatedTotalAmount * 0.05;
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
          cartQuantity: state.cartQuantity + 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      } else {
        window.location.href = "/myAccount";
        alert("Please sign in first to use all the features of website...");
      }
    case ADD_ALL_TO_CART:
      if (state.loggedInUser) {
        const itemToAdd = state.allItems[action.payload];
        const updatedTotalAmount = state.cartTotalAmount + itemToAdd.price;
        const updatedKargoPrice = state.kargoPrice + updatedTotalAmount * 0.05;
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
          cartQuantity: state.cartQuantity + 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      } else {
        window.location.href = "/myAccount";
        alert("Please sign in first to use all the features of website...");
      }
    case ADD_DRONE_TO_CART:
      if (state.loggedInUser) {
        const itemToAdd = state.drones[action.payload];
        const updatedTotalAmount = state.cartTotalAmount + itemToAdd.price;
        const updatedKargoPrice = state.kargoPrice + updatedTotalAmount * 0.05;
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
          cartQuantity: state.cartQuantity + 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      } else {
        window.location.href = "/myAccount";
        alert("Please sign in first to use all the features of website...");
      }
    case ADD_CAMERA_TO_CART:
      if (state.loggedInUser !== null) {
        const itemToAdd = state.cameras[action.payload];
        const updatedTotalAmount = state.cartTotalAmount + itemToAdd.price;
        const updatedKargoPrice = state.kargoPrice + updatedTotalAmount * 0.05;
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
          cartQuantity: state.cartQuantity + 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      } else {
        window.location.href = "/myAccount";
        alert("Please sign in first to use all the features of website...");
      }
    case ADD_ACCESSORY_TO_CART:
      if (state.loggedInUser !== null) {
        const itemToAdd = state.accessories[action.payload];
        const updatedTotalAmount = state.cartTotalAmount + itemToAdd.price;
        const updatedKargoPrice = state.kargoPrice + updatedTotalAmount * 0.05;
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
          cartQuantity: state.cartQuantity + 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      } else {
        window.location.href = "/myAccount";
        alert("Please sign in first to use all the features of website...");
      }
    case ADD_SALE_TO_CART:
      if (state.loggedInUser !== null) {
        const itemToAdd = state.sales[action.payload];
        const updatedTotalAmount = state.cartTotalAmount + itemToAdd.price;
        const updatedKargoPrice = state.kargoPrice + updatedTotalAmount * 0.05;
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
          cartQuantity: state.cartQuantity + 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      } else {
        window.location.href = "/myAccount";
        alert("Please sign in first to use all the features of website...");
      }
    case ADD_BESTSELLER_TO_CART:
      if (state.loggedInUser !== null) {
        const itemToAdd = state.bestSellers[action.payload];
        const updatedTotalAmount = state.cartTotalAmount + itemToAdd.price;
        const updatedKargoPrice = state.kargoPrice + updatedTotalAmount * 0.05;
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
          cartQuantity: state.cartQuantity + 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      } else {
        window.location.href = "/myAccount";
        alert("Please sign in first to use all the features of website...");
      }
    case ADD_NEWPRODUCTS_TO_CART:
      if (state.loggedInUser !== null) {
        const itemToAdd = state.newProducts[action.payload];
        const updatedTotalAmount = state.cartTotalAmount + itemToAdd.price;
        const updatedKargoPrice = state.kargoPrice + updatedTotalAmount * 0.05;
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
          cartQuantity: state.cartQuantity + 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      } else {
        window.location.href = "/myAccount";
        alert("Please sign in first to use all the features of website...");
      }
    case DELETE_PRODUCT_FROM_CART:
      const itemToDelete = state.cart[action.payload];
      const updatedCart = state.cart.filter(
        (item, index) => index !== action.payload
      );
      const updatedTotalAmount = state.cartTotalAmount - itemToDelete.price;
      const updatedKargoPrice = state.kargoPrice - state.cartTotalAmount * 0.05;

      if (updatedTotalAmount == 0) {
        return {
          ...state,
          cart: updatedCart,
          cartQuantity: state.cartQuantity - 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: 0,
          cartFinalAmount: 0,
          cartQuantity: 0,
        };
      } else {
        return {
          ...state,
          cart: updatedCart,
          cartQuantity: state.cartQuantity - 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      }
    case SHOW_ALL_ITEMS:
      const itemChosen = state.allItems[action.payload];
      localStorage.setItem("itemChosen", JSON.stringify(itemChosen));
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      return {
        ...state,
        itemChosen: state.itemChosen,
      };

    case SHOW_ACCESSORY_ITEMS:
      const chosenAccessory = state.accessories[action.payload];
      localStorage.setItem("itemChosen", JSON.stringify(chosenAccessory));
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      return {
        ...state,
        itemChosen: state.itemChosen,
      };

    case SHOW_DRONE_ITEMS:
      const chosenDrones = state.drones[action.payload];
      localStorage.setItem("itemChosen", JSON.stringify(chosenDrones));
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      return {
        ...state,
        itemChosen: state.itemChosen,
      };

    case SHOW_CAMERA_ITEMS:
      const chosenCameras = state.cameras[action.payload];
      localStorage.setItem("itemChosen", JSON.stringify(chosenCameras));
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      return {
        ...state,
        itemChosen: state.itemChosen,
      };

    case SHOW_SALE_ITEMS:
      const chosenSales = state.sales[action.payload];
      localStorage.setItem("itemChosen", JSON.stringify(chosenSales));
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      return {
        ...state,
        itemChosen: state.itemChosen,
      };

    case SHOW_BESTSELLER_ITEMS:
      const chosenBestSellers = state.bestSellers[action.payload];
      localStorage.setItem("itemChosen", JSON.stringify(chosenBestSellers));
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      return {
        ...state,
        itemChosen: state.itemChosen,
      };

    case SHOW_NEWPRODUCT_ITEMS:
      const chosenNewProducts = state.newProducts[action.payload];
      localStorage.setItem("itemChosen", JSON.stringify(chosenNewProducts));
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      return {
        ...state,
        itemChosen: state.itemChosen,
      };

    case SHOW_CART_ITEMS:
      const chosenCartItem = state.cart[action.payload];
      localStorage.setItem("itemChosen", JSON.stringify(chosenCartItem));
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      return {
        ...state,
        itemChosen: state.itemChosen,
      };

    case INCREASE_ITEM_QUANTITY:
      if (state.cart[action.payload].quantity < 10) {
        const updatedTotalAmount =
          state.cartTotalAmount + state.cart[action.payload].price;
        const updatedKargoPrice = state.kargoPrice + updatedTotalAmount * 0.05;
        const updatedCartItem = state.cart.map((item, index) =>
          index === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: item.cart_price * (item.quantity + 1),
              }
            : item
        );

        return {
          ...state,
          cart: updatedCartItem,
          cartQuantity: state.cartQuantity + 1,
          cartTotalAmount: updatedTotalAmount,
          kargoPrice: updatedKargoPrice,
          cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
        };
      }
    case DECREASE_ITEM_QUANTITY:
      if (state.cart[action.payload].quantity > 1) {
        const updatedTotalAmount =
          state.cartTotalAmount - state.cart[action.payload].cart_price;
        const updatedKargoPrice =
          state.kargoPrice - state.cartTotalAmount * 0.05;
        const updatedItem = state.cart.map((item, index) =>
          index === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: item.price - item.cart_price,
              }
            : item
        );
        if (updatedTotalAmount == 0) {
          return {
            ...state,
            cart: updatedItem,
            cartQuantity: state.cartQuantity - 1,
            cartTotalAmount: 0,
            kargoPrice: 0,
            cartFinalAmount: 0,
          };
        } else {
          return {
            ...state,
            cart: updatedItem,
            cartQuantity: state.cartQuantity - 1,
            cartTotalAmount: updatedTotalAmount,
            kargoPrice: updatedKargoPrice,
            cartFinalAmount: updatedTotalAmount + updatedKargoPrice,
          };
        }
      }
    case MAKE_DRONES:
      return {
        ...state,
        category: "Drones",
      };
    case MAKE_CAMERAS:
      return {
        ...state,
        category: "Cameras",
      };
    case MAKE_ALL:
      return {
        ...state,
        category: "All",
      };
    case MAKE_SALES:
      return {
        ...state,
        category: "Sales",
      };
    case MAKE_ACCESSORIES:
      return {
        ...state,
        category: "Accessories",
      };
    case MAKE_BESTSELLERS:
      return {
        ...state,
        category: "BestSellers",
      };
    case MAKE_NEWPRODUCTS:
      return {
        ...state,
        category: "NewProducts",
      };
    case SUBMIT_SHOPPING:
      alert("Your order has been succesfully placed on the list");
      return {
        ...state,
        cart: [],
        cartQuantity: 0,
        cartFinalAmount: 0,
        kargoPrice: 0,
        cartTotalAmount: 0,
      };
    default:
      return state;
  }
};
