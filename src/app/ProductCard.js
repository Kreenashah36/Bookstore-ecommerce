"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCart from "./(store)/store";

export default function ProductCard(props) {
  const { product } = props;
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;

  const setProduct = useCart((state) => state.setProduct);

  const router = useRouter();

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo,
    };
    setProduct({ newProduct });
    router.push("/product?price_id=" + price_id);
  }
  return (
    <div
      onClick={onProductClick}
      className="flex flex-col shadow hover:scale-105 bg-white text-black hover:shadow-lg cursor-pointer"
    >
      <img
        src={productInfo.images[0]}
        alt={name}
        className="w-full h-96  object-fit"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex font-bold items-center justify-between">
          <h3>{name}</h3>
          <p>${cost / 100}</p>
        </div>
      </div>
    </div>
  );
}
