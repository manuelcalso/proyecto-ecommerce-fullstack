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
  const { registerUser } = userCtx;

  const handleChange = (event) => {
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
      <div className="flex flex-col justify-center items-center form-bg my-2">
        <form
          onSubmit={handleSubmit}
          className=" bg-black rounded text-white px-10 jello-horizontal shadow-text-white"
        >
          <div>
            <h1 className="flex flex-col  justify-center items-center text-3xl font-brodies my-5">
              Sign Up to PB
            </h1>
          </div>
          <div className="my-5">
            <label className="mx-2 text-lg font-brodies">Name</label>
            <input
              name="name"
              value={newUser.name}
              onChange={handleChange}
              className="py-1 px-2 rounded"
            />
          </div>

          <div className="my-5">
            <label className="mx-2 text-lg font-brodies">Last Name</label>
            <input
              name="lastname"
              value={newUser.lastname}
              onChange={handleChange}
              className="py-1 px-2 rounded"
            />
          </div>

          <div className="my-5">
            <label className="mx-2 text-lg font-brodies">Email</label>
            <input
              name="email"
              type="email"
              value={newUser.email}
              onChange={handleChange}
              className="py-1 px-2 rounded"
            />
          </div>

          <div className="my-5">
            <label className="mx-2 text-lg font-brodies">Password</label>
            <input
              name="password"
              type="password"
              value={newUser.password}
              onChange={handleChange}
              className="py-1 px-3 rounded shadow-text-white"
              placeholder="Remember it..."
            />
          </div>
          <div className="my-5">
            <label className="mx-2 text-lg font-brodies">Address</label>
            <input
              name="address"
              type="address"
              value={newUser.address}
              onChange={handleChange}
              className="py-1 px-2 rounded shadow-text-white"
              placeholder="To deliver..."
            />
          </div>
          <div className="my-5">
            <label className="mx-2 text-lg font-brodies">Country</label>
            <input
              name="country"
              type="country"
              value={newUser.country}
              onChange={handleChange}
              className="py-1 px-2 rounded"
            />
          </div>
          <div className="my-5">
            <label className="mx-2 text-lg font-brodies">Zipcode</label>
            <input
              name="zipcode"
              type="zipcode"
              value={newUser.zipcode}
              onChange={handleChange}
              className="py-1 px-2 rounded"
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
              className="my-8 py-2 px-2 border border-transparent hover:border-purple-500 border-2 hover:border-4 rounded bg-green-500 text-white hover:text-black text-2xl transition font-brodies shadow-text"
              onClick={notify}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
