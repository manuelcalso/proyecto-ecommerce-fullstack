import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductContext from "../../../context/Product/ProductContext";
import priceFormatter from "../../../lib/priceFormatter";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import UserContext from "../../../context/User/UserContext";
import Cart from "../../../components/Cart";

function ProductPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const userCtx = useContext(UserContext);
  const { authStatus } = userCtx;
  //console.log("entrando a productPage...");
  const params = useParams();
  const { slug } = params;
  //console.log(params);
  const productCtx = useContext(ProductContext);
  const { product, getProduct } = productCtx;
  console.log(product);

  const { _id, idStripe, name, currency, prices, img, description } = product;
  useEffect(() => {
    getProduct(slug);
  }, [slug]);

  const quantityOptions = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row lg:flex-col justify-evenly items-center italic">
        <div className="md:w-1/2 lg:w-full video-background">
          <video autoPlay muted loop className="video">
            <source
              src="https://res.cloudinary.com/dgzghl0ur/video/upload/v1700674383/videos/pexels2_hmshhg.mp4"
              type="video/mp4"
            />
          </video>
          <div />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2 bg-black rounded py-5">
          <img
            src={img[0]}
            className="border border-white h-82 w-80 rounded"
            alt={name}
          />
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <ul className="flex flex-col gap-y-2 md:w-1/2 lg:w-full">
          {prices.length !== 0 ? (
            <>
              {prices.map((element) => {
                const { price, size } = element;

                return (
                  <li
                    key={size}
                    className="text-xl border border-black py-2 px-8 bg-product rounded flex flex-col md:flex-row lg:flex-col justify-center items-center gap-x-5 "
                  >
                    <h2 className="font-brodies">Size : {size}</h2>
                    <p className="font-brodies">
                      Price: {priceFormatter(price)} {currency}{" "}
                    </p>
                    {authStatus ? (
                      <>
                        <select className="rounded bg-green-500 shadow-text text-black">
                          {quantityOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <button
                          className="border border-black rounded px-5 bg-green-500 text-black text-xl py-2 .bg-product shadow-text font-brodies mt-2 md:mt-0 lg:mt-2"
                          onClick={() => setCartOpen(!cartOpen)}
                        >
                          Add to Cart
                          {cartOpen && <Cart />}
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="flex flex-col border border-white rounded py-2 px-2 bg-green-500 shadow-text text-black justify-center items-center font-brodies mt-2 md:mt-0 lg:mt-2"
                        >
                          Create your cart
                        </Link>
                      </>
                    )}
                  </li>
                );
              })}
            </>
          ) : (
            <li>No hay producto disponibles</li>
          )}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
