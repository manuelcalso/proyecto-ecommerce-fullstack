const ProductReducer = (globalState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...globalState,
        products: action.payload,
      };
    case "GET_PRODUCT":
      return {
        ...globalState,
        product: { ...globalState.product, ...action.payload },
      };
    default:
      return globalState;
  }
};
export default ProductReducer;
