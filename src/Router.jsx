//librerias
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//componentes
import Home from "./Home.jsx";
import Mainproducts from "./pages/products";
import Login from "./pages/signin";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductState from "./context/Product/ProductState.jsx";
import ProductPage from "./pages/products/product/index.jsx";
import Signup from "./pages/signup/index.jsx";
import UserState from "./context/User/UserState.jsx";
import Auth from "./routes/Auth.jsx";
import Cart from "./components/Cart.jsx";
import Public from "./routes/Public.jsx";
import Private from "./routes/Private.jsx";

export default function Router() {
  return (
    <>
      <UserState>
        <ProductState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Public component={Home} />}></Route>
              <Route
                path="/products"
                element={<Public component={Mainproducts} />}
              ></Route>
              <Route
                path="/products/:slug"
                element={<Public component={ProductPage} />}
              ></Route>
              <Route
                path="/signup"
                element={<Auth component={Signup} />}
              ></Route>
              <Route path="/login" element={<Auth component={Login} />}></Route>
              <Route
                path="/cart"
                element={<Private component={Cart} />}
              ></Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </ProductState>
      </UserState>
    </>
  );
}
