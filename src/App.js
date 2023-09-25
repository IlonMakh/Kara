import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Basket from "./pages/Basket";
import Account from "./pages/Account";
import AppSvg from "./components/global/AppSvg";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import BasketModal from "./components/basket/BasketModal";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import SizeModal from "./components/product/SizeModal";
import ColorModal from "./components/product/ColorModal";

function App() {
  return (
    <SimpleBar  style={{ maxHeight: "100vh" }}>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog/:id" element={<Product />} />
      </Routes>

      {/* <BasketModal /> */}
      {/* <SizeModal /> */}
      <ColorModal />
      <AppSvg />
    </div>
    </SimpleBar>
  );
}

export default App;
