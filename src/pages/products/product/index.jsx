import { useParams, Link } from "react-router-dom";
import priceFormatter from "../../../lib/priceFormatter";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import useProduct from "../../../hooks/useProduct";
import Cart from "../../../components/Cart";
import { useState } from "react";

function ProductPage() {
  const params = useParams();
  const { slug } = params;

  //custom hook
  const { authStatus, cart, product, localPrices, handleChange, handleSubmit } =
    useProduct(slug);
  console.log(localPrices);
  const { _id, idStripe, name, currency, prices, img, description } = product;

  const quantityOptions = [0, 1, 2, 3, 4, 5];
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <Header />

      <div className=" flex flex-col justify-center items-center">
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
        <div className="border border-black py-2 px-2 bg-black">
          <img
            src={img[0]}
            className="h-120 w-80 border border-black rounded"
            loading="lazy"
          />
        </div>
        <div className="text-2xl flex flex-col gap-y-5 my-2 px-6 py-2 bg-black rounded justify-center items-center border border-gray-500">
          <h1 className="font-brodies shadow-text-white">{name}</h1>
          <p className="italic shadow-text-white">{description}</p>
        </div>
        <div className="text-2xl border border-gray-500 flex flex-col gap-y-2 my-2 px-2 bg-black rounded">
          <form onSubmit={handleSubmit}>
            <ul>
              {prices.length !== 0 ? (
                <>
                  {Array.isArray(localPrices) &&
                    localPrices.map((element) => {
                      console.log(element);
                      const { price, size, priceDescription } = element;
                      console.log(price);
                      console.log(size);
                      console.log(priceDescription);

                      return (
                        <>
                          <li
                            key={size}
                            className="flex flex-col mx-8 my-2 gap-y-2"
                          >
                            {" "}
                            <div className="flex flex-row gap-x-5 border border-gray-900 rounded">
                              <h2 className="font-brodies shadow-text-white mx-2 my-2">
                                Size : {element.size}
                              </h2>
                              <p className="italic">
                                Price : {priceFormatter(element.price)}{" "}
                                {currency}{" "}
                              </p>
                              {authStatus ? (
                                <>
                                  <select
                                    type="option"
                                    className="border border-white rounded px-5"
                                    name={`${element.id}`}
                                    data-product-name={name}
                                    data-product-size={size}
                                    data-product-pricedescription={
                                      priceDescription
                                    }
                                    data-product-price={price}
                                    data-product-img={img[0]}
                                    data-product-slug={slug}
                                    onChange={(evt) => {
                                      handleChange(evt);
                                    }}
                                  >
                                    {quantityOptions.map((qo) => {
                                      return (
                                        <>
                                          {qo === element.quantity ? (
                                            <>
                                              <option selected value={qo}>
                                                {qo}
                                              </option>
                                            </>
                                          ) : (
                                            <>
                                              <option value={qo}>{qo}</option>
                                            </>
                                          )}
                                        </>
                                      );
                                    })}
                                  </select>
                                </>
                              ) : null}
                            </div>
                          </li>
                        </>
                      );
                    })}
                </>
              ) : (
                "No price available"
              )}
            </ul>
            {authStatus ? (
              <>
                <div className="flex flex-row justify-center items-center">
                  <button
                    type="submit"
                    className="border border-white rounded px-2 py-2 my-2 bg-green-500 hover:bg-red-500 text-black text-2xl font-bold shadow-text "
                    onClick={handleCartToggle}
                  >
                    {cart.length !== 0 ? "Modify cart" : "Add to cart"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="border border-white rounded px-2 py-2 my-2 bg-green-500 hover:bg-red-500 flex flex-row justify-center itmes-center">
                  <Link to="/login">
                    <button className="text-black text-2xl font-bold shadow-text">
                      Create your cart
                    </button>
                  </Link>
                </div>
              </>
            )}
          </form>
        </div>
      </div>

      <Footer />
      {cartOpen && <Cart />}
    </>
  );
}

export default ProductPage;
