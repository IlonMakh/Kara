import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Basket from "./pages/Basket";
import Account from "./pages/Account";
import AppSvg from "./components/global/AppSvg";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />

      <AppSvg />
    </div>
  );
}

export default App;
