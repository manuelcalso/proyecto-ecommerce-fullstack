import { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import UserContext from "../context/User/UserContext";

export default function Cart() {
  const userCtx = useContext(UserContext);

  const { cart, sessionURL, getCheckoutSession, editCart } = userCtx;
  const { total, handleSubmit, handleChange, handleRemove } = useCart(
    cart,
    getCheckoutSession,
    editCart
  );

  //console.log("cart", cart);

  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (sessionURL) window.location.href = sessionURL;
  }, [sessionURL]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 transition" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll cardbackground shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-sm font-medium text-black">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-black"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart.map((e) => {
                              return (
                                <>
                                  <li
                                    key={e._id}
                                    className="flex flex-row justify-start items-center text-black text-sm gap-x-2"
                                  >
                                    <Link to={`/products/${e.slug}`}>
                                      <img
                                        src={e.img}
                                        alt="product-image"
                                        className="h-30 w-20"
                                      />
                                    </Link>
                                    <h3>
                                      <Link to={`/products/${e.slug}`}>
                                        {e.name}
                                      </Link>
                                    </h3>
                                    <p>{e.size}</p>
                                    <p>
                                      $
                                      {((e.price / 100) * e.quantity).toFixed(
                                        2
                                      )}
                                    </p>
                                    <select
                                      name={e.priceID}
                                      onChange={(e) => {
                                        handleChange(e);
                                      }}
                                      className="text-white"
                                    >
                                      {Array(5) //[, , , , ]
                                        .fill(null)
                                        .map((_, i) => {
                                          const initial = i + 1;
                                          return initial === e.quantity ? (
                                            <option selected value={initial}>
                                              {initial}
                                            </option>
                                          ) : (
                                            <option value={initial}>
                                              {initial}
                                            </option>
                                          );
                                        })}
                                    </select>
                                    <br />

                                    <button
                                      type="button"
                                      onClick={(evt) => {
                                        handleRemove(evt, e.priceID);
                                      }}
                                      className="border border-black rounded text-black bg-red-500 px-2 shadow-text"
                                    >
                                      Remove
                                    </button>
                                  </li>
                                  <br />
                                </>
                              );
                            })}
                          </ul>
                          <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <div className="flex flex-row justify-center items-center text-sm ">
                                <p>Total</p>
                                <p> $ {total.toFixed(2)}</p>
                              </div>
                            </div>

                            <div className="mt-6">
                              <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 shadow-text"
                                onClick={handleSubmit}
                              >
                                Checkout
                              </a>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                              <p>
                                or
                                <br />
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                  onClick={() => setOpen(false)}
                                >
                                  Continue Shopping
                                  <span aria-hidden="true"> &rarr;</span>
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
