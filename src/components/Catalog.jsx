import { useEffect, useContext } from "react";
import ProductContext from "../context/Product/ProductContext";
import Productcard from "./Productcard";

const Catalog = () => {
  const productCtx = useContext(ProductContext);
  const { products, getProducts } = productCtx;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="relative navletter">
      <div className="video-background">
        <video playsinline autoPlay muted loop className="video">
          <source
            src={
              "https://res.cloudinary.com/dgzghl0ur/video/upload/v1700674393/videos/smoke_bwz0nv.mp4"
            }
            type="video/mp4"
          />
        </video>
        <div />
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only"></h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 font-brodie bg-[#830000] font-brodies shadow-text-white">
          {products &&
            products.map((product) => (
              <Productcard key={product.slug} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
