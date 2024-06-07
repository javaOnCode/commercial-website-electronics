import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import LastPart from "./components/LastPart";
import NoPage from "./components/NoPage";
import About from "./components/About";
import AllProducts from "./components/AllProducts";
import Drones from "./components/Drones";
import Cameras from "./components/Cameras";
import Accessories from "./components/Accessories";
import { Provider } from "react-redux";
import { store } from "./components/redux/Store";
import Sales from "./components/Sales";
import Contact from "./components/Contact";
import Item from "./components/Item";
import Cart from "./components/Cart";
import MyAccount from "./components/MyAccount";
import CartSubmission from "./components/CartSubmission";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/myAccount" element={<MyAccount />} />
            <Route path="/about" element={<About />} />
            <Route path="/all" element={<AllProducts />} />
            <Route path="/all/:id" element={<Item />} />
            <Route path="/drones/:id" element={<Item />} />
            <Route path="/accessories/:id" element={<Item />} />
            <Route path="/sales/:id" element={<Item />} />
            <Route path="/cameras/:id" element={<Item />} />
            <Route path="/bestSellers/:id" element={<Item />} />
            <Route path="/newProducts/:id" element={<Item />} />
            <Route path="/cart/:id" element={<Item />} />
            <Route path="/drones" element={<Drones />} />
            <Route path="/cameras" element={<Cameras />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/sale" element={<Sales />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cartSubmission" element={<CartSubmission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <LastPart />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
