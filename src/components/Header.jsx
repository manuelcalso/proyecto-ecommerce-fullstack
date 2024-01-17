import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/User/UserContext.jsx";
import toast, { Toaster } from "react-hot-toast";
import Cart from "../components/Cart.jsx";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
  });

  const userCtx = useContext(UserContext);

  const { cart, getCart, authStatus, currentUser, logoutUser } = userCtx;

  useEffect(() => {
    if (currentUser) {
      const { name, lastname } = currentUser;

      setUser({
        name,
        lastname,
      });
    }
  }, [currentUser]);
  //actualizacion de carrito
  useEffect(() => {
    const fetchCart = async () => {
      await getCart();
    };
    fetchCart();
  }, [currentUser]);

  //calculo del carrito
  useEffect(() => {
    const getTotalProducts = () => {
      const totalQty = cart.reduce((acc, cv) => {
        return acc + cv.quantity;
      }, 0);
      return totalQty;
    };

    const result = getTotalProducts();

    setTotal(result);
  }, [cart]);

  //const notify = () => toast.success("Successfully Log In!");

  return (
    <>
      <section className="theme-alt font-brodies w-full">
        <ul className="flex flex-row sm:flex-row justify-between items-center gap-x-2 mx-2">
          <img
            src={
              "https://res.cloudinary.com/dgzghl0ur/image/upload/v1705375915/products%20ecommerce/workana/beach_1_-_copia_eknxnl.png"
            }
            className="rounded-full h-16 w-16 imagenlogo hidden sm:inline-block"
            loading="lazy"
          />

          <li className="bg-black rounded py-2 px-2 text-xl shadow-text-white text-white ">
            <Link to="/">Home</Link>
          </li>

          {authStatus ? (
            <>
              <div className="flex flex-col sm:flex-row justify-end items-center gap-x-5 bg-black rounded py-2 px-2">
                <p className="shadow-text-white text-white">
                  Welcome {user.name}
                </p>
                <p className="bg-purple-900 rounded px-2 shadow-text text-white">
                  <Link to="/products">Products</Link>
                </p>
                <button
                  onClick={logoutUser}
                  className="border border-white rounded px-2 py-1 text-green-500 "
                >
                  <Link to="/">Log Out</Link>
                </button>
                <p className="flex flex-row border border-white rounded px-1 py-1 ">
                  <button
                    to="/cart"
                    className="flex flex-row gap-x-2 shadow-text-white text-white"
                    onClick={() => setCartOpen(!cartOpen)}
                  >
                    Your Cart: {cartOpen && <Cart />}
                    <span>{total}</span>
                  </button>
                </p>
              </div>

              <Toaster position="top-center" reverseOrder={false} />
            </>
          ) : (
            <>
              <div className="flex flex-row sm:flex-row gap-x-10 font-brodies text-xl justify-center items-center h-20 w-auto mx-2 ">
                <li>
                  <Link to="/signup" className="shadow-text">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="shadow-text">
                    Log In
                  </Link>
                </li>
              </div>
            </>
          )}
        </ul>
      </section>
    </>
  );
}

export default Header;
