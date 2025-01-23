"use client";
import useCart from "../(store)/store";

export default function ProductPage(props) {
  const { searchParams } = props;
  const { price_id } = searchParams;
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const { cost, productInfo, name, description } = product;

  if (!product?.name) {
    window.location.href = "/";
  }

  function handleAddToCart() {
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
  }

  return (
    <div className="flex flex-col p-4 bg-slate-200 text-black ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
        <div className="lg:mx-32 md:shadow">
          <img
            src={productInfo.images[0]}
            alt={name}
            className="w-full lg:h-[40rem] "
          />
        </div>
        <div className="flex flex-col gap-2 py-4 md:px-4">
          <div className="flex md:flex-col md:items-start text-xl  items-center justify-between gap-8">
            <h3 className="font-bold md:text-3xl">{name}</h3>
            <p className="md:text-md">${cost / 100}</p>
          </div>
          <p className="text-md">{description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-900 text-white hover:bg-slate-500 cursor-pointer ml-auto max-lg:m-0 m-10 px-4 py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
