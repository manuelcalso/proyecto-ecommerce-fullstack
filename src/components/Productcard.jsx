import { Link } from "react-router-dom";

const Productcard = ({ product }) => {
  return (
    <>
      <ul className="">
        <li key={product.slug}>
          <Link to={`/products/${product.slug}`}>
            <div className="flex flex-col justify-center items-center bg-black hover:bg-[#4e0000] rounded border border-white hover:border-purple-500 ">
              <br />
              <img
                src={product.img[0]}
                alt={product.name}
                className="h-62 w-60"
                loading="lazy"
              />
              <br />
              <span className="text-lg">{product.name}</span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Productcard;
