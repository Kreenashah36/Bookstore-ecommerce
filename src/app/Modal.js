"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ReactDom from "react-dom";
import useCart from "./(store)/store";

export default function Modal() {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);
  const router = useRouter();
  const product = useCart((state) => state.product);
  const { cost, name } = product;
  const emptyCart = useCart((state) => state.emptyCart);
  const removeItemFromCart = useCart((state) => state.removeItemFromCart);
  const totalPrice = cartItems.reduce((total, item) => total + item.cost, 0);

  function handleEmptyCart() {
    const newItem = {
      quantity: 1,
      name,
      cost,
    };
    emptyCart({ newItem });
  }
  function handleRemoveFromCart(itemIndex) {
    removeItemFromCart({ itemIndex });
  }
  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.price_id,
        quantity: 1,
      };
    });
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });
    const data = await res.json();
    router.push(data.session.url);
  }

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div onClick={closeModal} className="bg-transparent absolute  inset-0">
        {" "}
      </div>
      <div className="flex flex-col bg-white absolute text-black right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex items-center p-6 justify-between text-xl relative">
          <h1 className="font-bold text-2xl">Cart</h1>
          <i
            onClick={closeModal}
            className="fa-solid cursor-pointer hover:opacity-60 fa-xmark"
          ></i>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-black w-full"></div>
        </div>
        <div className="p-4 overflow-scroll flex-1 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p>There is nothing in your cart</p>
          ) : (
            <>
              {cartItems.map((cartItem, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex border-l border-solid border-slate-700 px-2 flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <h2>{cartItem.name}</h2>
                      <p>${cartItem.cost / 100}</p>
                    </div>
                    <p className="text-slate-600 text-sm">Quantity: 1</p>
                    <button
                      onClick={() => handleRemoveFromCart(itemIndex)}
                      className="text-black border border-solid border-black hover:opacity-60 cursor-pointer  mx-4 my-3 px-4 py-2"
                    >
                      Remove From Cart
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="text-black  flex justify-between mx-6   ">
          <h2 className="font-bold text-lg">Total:</h2>
          <p className="font-bold text-lg">${totalPrice / 100}</p>
        </div>

        <button
          onClick={handleEmptyCart}
          className=" text-black border border-solid border-black hover:opacity-60 cursor-pointer  mx-6  px-4 py-2"
        >
          Empty Cart
        </button>
        <div
          onClick={checkout}
          className="border border-solid border-slate-700 text-xl m-6  p-4 uppercase grid place-items-center hover:opacity-60 cursor-pointer"
        >
          Checkout
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
