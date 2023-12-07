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

      <div className="flex justify-evenly items-center italic font-brodies">
        <div className="video-background">
          <video autoPlay muted loop className="video">
            <source
              src={
                "https://res.cloudinary.com/dgzghl0ur/video/upload/v1700674383/videos/pexels2_hmshhg.mp4"
              }
              type="video/mp4"
            />
          </video>
          <div />
        </div>
        <div className="flex flex-col jusify-center items-center gap-y-2 bg-black rounded py-5">
          <img
            src={img[0]}
            className="border border-white h-82 w-80 rounded"
          ></img>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <ul className="flex flex-col gap-y-2 ">
          {prices.length !== 0 ? (
            <>
              {prices.map((element) => {
                console.log(element);
                const { price, size } = element;
                //console.log(price);
                //console.log(size);

                return (
                  <>
                    <li className="text-3xl border border-black py-2 px-8 bg-product rounded">
                      <h2>Size : {size}</h2>
                      <br />
                      <p>
                        Price: {priceFormatter(price)} {currency}{" "}
                      </p>
                      {authStatus ? (
                        <>
                          <select className="rounded py-2 px-2 bg-green-500 shadow-text text-black">
                            {quantityOptions.map((element) => {
                              return (
                                <>
                                  <option value={element}>{element}</option>
                                </>
                              );
                            })}
                          </select>

                          <button
                            className="border border-black rounded px-5 bg-green-500 text-black text-2xl py-2 .bg-product shadow-text"
                            onClick={() => setCartOpen(!cartOpen)}
                          >
                            Add to Cart
                            {cartOpen && <Cart />}
                          </button>
                        </>
                      ) : (
                        <Link
                          to="/login"
                          className="flex flex-col border border-white rounded py-2 px-2 bg-green-500 shadow-text text-black"
                        >
                          Create your cart
                        </Link>
                      )}
                    </li>
                  </>
                );
              })}
            </>
          ) : (
            "No hay producto disponibles"
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
