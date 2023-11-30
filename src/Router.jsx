//librerias
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//componentes
import Home from "./Home.jsx";
import Mainproducts from "./pages/products";
import Registration from "./pages/signup";
import Login from "./pages/signin";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductState from "./context/Product/ProductState.jsx";

export default function Router() {
  return (
    <>
      <ProductState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Mainproducts />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ProductState>
    </>
  );
}
