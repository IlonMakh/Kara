import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Basket from "./pages/Basket";
import Account from "./pages/Account";
import AppSvg from "./components/global/AppSvg";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog/:id" element={<Product />} />
      </Routes>

      <AppSvg />
    </div>
  );
}

export default App;
