import { useState, useContext } from "react";
import UserContext from "../../context/User/UserContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    country: "",
    zipcode: "",
  });

  const userCtx = useContext(UserContext);
  //console.log(userCtx);

  const { registerUser } = userCtx;

  const handleChange = (event) => {
    //console.log(event.target.name);

    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return registerUser(newUser);
  };
  const notify = () => toast.success("Successfully Sign Up!");

  return (
    <>
      <Header>
        <Toaster position="top-center" reverseOrder={false} />
      </Header>
      <div className="flex flex-col justify-center items-center form-bg">
        <form
          onSubmit={handleSubmit}
          className="border border-green-900 bg-black rounded text-white px-10 jello-horizontal font-brodies"
        >
          <div>
            <h1 className="flex flex-col  justify-center items-center text-3xl font-brodies my-5">
              Sign Up to PB
            </h1>
          </div>
          <div className="my-5">
            <label className="mx-2">Name</label>
            <input name="name" value={newUser.name} onChange={handleChange} />
          </div>

          <div className="my-5">
            <label className="mx-2">Last Name</label>
            <input
              name="lastname"
              value={newUser.lastname}
              onChange={handleChange}
            />
          </div>

          <div className="my-5">
            <label className="mx-2">Email</label>
            <input
              name="email"
              type="email"
              value={newUser.email}
              onChange={handleChange}
            />
          </div>

          <div className="my-5">
            <label className="mx-2">Password</label>
            <input
              name="password"
              type="password"
              value={newUser.password}
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label className="mx-2">Address</label>
            <input
              name="address"
              type="address"
              value={newUser.address}
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label className="mx-2">Country</label>
            <input
              name="country"
              type="country"
              value={newUser.country}
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label className="mx-2">Zipcode</label>
            <input
              name="zipcode"
              type="zipcode"
              value={newUser.zipcode}
              onChange={handleChange}
            />
          </div>

          <button
            className="my-8 py-2 border border-green-900 hover:border-purple-500 border-2 hover:border-4 rounded bg-green-500 text-black text-2xl flex flex-row justify-center items-center"
            onClick={notify}
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
