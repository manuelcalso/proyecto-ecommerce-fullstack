import { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import axios from "axios";
import axiosClient from "../../config/axios";

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
  const getProducts = async () => {
    try {
      //console.log("entrando a getProducts");
      const res = await axiosClient.get("/api/v1/products/");
      const {
        data: { data: dataProducts },
      } = res;

      //console.log("respuesta de productos", dataProducts);

      // VALIDACIONES DE ERRORES
      dispatch({
        type: "GET_PRODUCTS",
        payload: dataProducts,
      });
    } catch (error) {
      console.log("no se completo el fetch...", error);
    }
  };

  const getProduct = async (slug) => {
    //console.log("entrando a getProduct");
    try {
      const res = await axiosClient.get(`/api/v1/products/readone/${slug}`);

      const {
        data: { data: dataProduct },
      } = res;
      //console.log(res);
      dispatch({
        type: "GET_PRODUCT",
        payload: dataProduct,
      });
    } catch (error) {
      console.log("error, datos no encontrados", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        product: globalState.product,
        getProducts,
        getProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );

  //obtener los productos
};

export default ProductState;
