import { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import axios from "axios";

const ProductState = (props) => {
  //valor inicial

  const initialState = {
    products: [],
    product: {
      _id: "",
      idStripe: "",
      name: "",
      currency: "",
      prices: [],
      img: [""],
      description: "",
      slug: "",
    },
  };

  //manejo reducer(cambios en el estado )
  const [globalState, dispatch] = useReducer(ProductReducer, initialState);

  //eventos dispatchers
  const getProduts = async () => {
    const res = await axios.get("http://localhost:3005/api/v1/products/");
    console.log(res);
  };

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        getProduts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );

  //obtener los productos
};

export default ProductState;
