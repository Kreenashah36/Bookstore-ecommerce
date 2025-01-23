"use client";
import Link from "next/link";
import React from "react";
import useCart from "./(store)/store";
import Modal from "./Modal";

export default function Header() {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);

  return (
    <header className="sticky top-0 p-4 text-black bg-white border-b border-solid border-blue-900 shadow-2xl z-50  sm:text-xl md:text-2xl  flex justify-between ">
      {openModal && <Modal />}
      <div className="flex justify-between md:gap-40 lg:gap-96 ">
        <Link href={"/"}>
          <h1 className="uppercase cursor-pointer font-bold hover:scale-110">
            Book Store
          </h1>
        </Link>

        <div className="flex px-6 gap-6 max-md:hidden">
          <Link href={"/products"}>
            <h1 className="uppercase cursor-pointer font-bold hover:scale-110">
              Products
            </h1>
          </Link>
          <Link href={"/contact"}>
            <h1 className="uppercase cursor-pointer font-bold hover:scale-110">
              Contact Us
            </h1>
          </Link>
        </div>
      </div>

      <div
        onClick={setOpenModal}
        className="relative cursor-pointer group grid place-items-center"
      >
        {cartItems.length > 0 && (
          <div className="absolute aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center top-0 bg-black text-white rounded-full right-0 -translate-y-1/2 translate-x-1/2">
            <p className="text-xs sm:text-sm">{cartItems.length}</p>
          </div>
        )}
        <i className="fa-solid cursor-pointer group-hover:text-slate-500 fa-cart-shopping"></i>
      </div>
    </header>
  );
}
