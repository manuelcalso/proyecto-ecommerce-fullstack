import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Cart } from "react-bootstrap-icons";
import UserContext from "../context/User/UserContext.jsx";

function Header() {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
  });

  const userCtx = useContext(UserContext);

  const { authStatus, currentUser, logoutUser } = userCtx;
  console.log(authStatus);

  useEffect(() => {
    if (currentUser) {
      const { name, lastname } = currentUser;

      setUser({
        name,
        lastname,
      });
    }
  }, [currentUser]);

  return (
    <>
      <section className=" bg-[#850000] font-brodies">
        <ul className="flex flex-col sm:flex-row justify-between items-center gap-x-2 mx-2">
          <img
            src={
              "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700674111/products%20ecommerce/logos/nulogo3_waqxqh.png"
            }
            className="rounded-full h-20 w-20 imagenlogo"
          />
          <li className="bg-black rounded py-2 px-2 text-xl ">
            <Link to="/">Home</Link>
          </li>

          {authStatus ? (
            <>
              <div className="flex flex-col sm:flex-row justify-end items-center gap-x-5 bg-black rounded py-2 px-2">
                <p>
                  Welcome, {user.name} {user.lastname}
                </p>
                <p className="bg-purple-900 rounded px-2">
                  <Link to="/products">Products</Link>
                </p>
                <button
                  onClick={logoutUser}
                  className="border border-white rounded px-2 py-1 text-green-500"
                >
                  <Link to="/">Log Out</Link>
                </button>
                <p className="flex flex-row ">
                  <Link to="/cart" className="flex flex-row gap-x-2">
                    <Cart /> Your Cart: <span>3 pizzas</span>
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-x-10 font-brodies text-xl justify-center items-center h-20 w-auto mx-2">
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
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
