import profileimg from "../../assets/marco.png";
import toast, { Toaster } from "react-hot-toast";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserContext from "../../context/User/UserContext";
import { useContext, useState } from "react";

export default function Login() {
  const notify = () => toast.success("Successfully Log In!");

  const userCtx = useContext(UserContext);
  const { loginUser } = userCtx;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return loginUser(user);
  };

  return (
    <>
      <Header
        imagennegocio={
          "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700674111/products%20ecommerce/logos/nulogo3_waqxqh.png"
        }
        imagenprofile={profileimg}
      />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black bg-product ">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm navletter  ">
          <a href="/">
            <img
              className=" mx-auto h-28 w-auto rounded flicker"
              src={
                "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700674111/products%20ecommerce/logos/nulogo3_waqxqh.png"
              }
              alt="Plastilogo"
            />
          </a>
          <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-white shadow-text font-brodies">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm navletter">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block px-2 text-lg font-medium leading-6 text-white shadow-text font-brodies"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  shadow-text-white"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block px-2 text-lg font-medium leading-6 text-white shadow-text font-brodies"
                >
                  Password
                </label>
                {/*
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
                */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5  leading-6 text-black hover:text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-brodies transition shadow-text-white"
                onClick={notify}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer
        imagenlogo={
          "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700674111/products%20ecommerce/logos/nulogo3_waqxqh.png"
        }
      />
    </>
  );
}
