import { useState, useEffect, useContext } from "react";
import ProductContext from "../context/Product/ProductContext";
import UserContext from "../context/User/UserContext";

export default function useProduct(slug) {
  // Utilizamos el hook useContext para acceder al contexto del usuario y de la pizza
  const userCtx = useContext(UserContext);
  const { authStatus, cart, editCart, getCart } = userCtx;

  // Definimos el estado inicial para el formulario y los precios del estado local
  const productCtx = useContext(ProductContext);
  const { product, getProduct } = productCtx;

  const [form, setForm] = useState({});
  const [localPrices, setLocalPrices] = useState({});

  useEffect(() => {
    // Definimos una función asíncrona para obtener el carrito
    const fetchCart = async () => {
      await getCart();
    };

    // Llamamos a la función para obtener el carrito y obtener la pizza por su slug
    fetchCart();
    getProduct(slug);
  }, []);

  // Utilizamos otro hook useEffect para realizar acciones cuando cambia el precio de la pizza
  useEffect(() => {
    // Si el id de la pizza es null, no hacemos nada
    if (product.id === null) {
      return null;
    }

    // Actualizamos los precios locales basándonos en los precios de la pizza
    const updatedPrices = product.prices.map((firstElement) => {
      let comparisonCart = cart.filter((secondElement) => {
        return firstElement.id === secondElement.priceID;
      });

      const [cartQuantity] = comparisonCart;

      return {
        ...firstElement,
        quantity: cartQuantity ? cartQuantity.quantity : 0,
      };
    });

    // Actualizamos el estado con los precios actualizados y el carrito
    setLocalPrices([...updatedPrices]);
    setForm([...cart]);
  }, [product.prices]);

  const handleChange = (e) => {
    // Si el valor del input es "0", filtramos el formulario para eliminar el elemento con el priceID correspondiente
    if (e.target.value === "0") {
      const filteredData = form.filter((element) => {
        return element.priceID !== e.target.name;
      });

      return setForm(filteredData);
    }

    // Creamos un nuevo objeto con los datos del input
    const newData = {
      priceID: e.target.name,
      priceDescription: e.target.getAttribute("data-product-pricedescription"),
      size: e.target.getAttribute("data-product-size"),
      name: e.target.getAttribute("data-product-name"),
      quantity: e.target.value,
      price: e.target.getAttribute("data-product-price"),
      img: e.target.getAttribute("data-product-img"),
      slug: e.target.getAttribute("data-product-slug"),
    };

    // Buscamos el elemento en el formulario con el mismo priceID
    const filteredData = form.findIndex((element) => {
      return element.priceID === e.target.name;
    });

    // Si no encontramos el elemento, añadimos el nuevo dato al formulario
    if (filteredData === -1) {
      return setForm([...form, newData]);
    }

    // Si encontramos el elemento, lo actualizamos con los nuevos datos
    const updatedData = form.map((elt) => {
      return elt.priceID === e.target.name ? newData : elt;
    });

    // Actualizamos el estado del formulario con los datos actualizados
    return setForm(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editCart(form);
  };

  return {
    authStatus,
    cart,
    product,
    localPrices,
    handleChange,
    handleSubmit,
  };
}
