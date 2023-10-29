import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
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
import { useEffect, useRef } from "react";
import { setWrapper } from "./redux/actions/wrapperActions";
import { connect } from 'react-redux';

function App() {
  // const simpleBarRef = useRef();

  // useEffect(() => {
  //   // Получите элемент прокрутки внутри useEffect, когда реф уже определен
  //   const wrapper = simpleBarRef.current.getScrollElement();

  //   // Используйте setWrapper, чтобы установить wrapper в Redux-хранилище
  //   setWrapper(wrapper);
  // }, []);

  return (
    // <SimpleBar  style={{ maxHeight: "100vh" }} ref={simpleBarRef}>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog/:id" element={<Product />} />
      </Routes>

      <BasketModal modalName="basket"/>
      <SizeModal modalName="size"/>
      <ColorModal modalName="color"/>
      <AppSvg />
    </div>
    // </SimpleBar>
  );
}

const mapDispatchToProps = {
  setWrapper,
};

export default connect(null, mapDispatchToProps)(App);
