import Stripe from "stripe";
import ProductCard from "./ProductCard";
import HomeBanner from "./Banner";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2024-04-10",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  return (
    <main className=" flex flex-col bg-slate-200 ">
      <HomeBanner />
      <div className=" w-full md:px-10 px-5 grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-10 py-10 ">
        {products.map((product, productIndex) => {
          return <ProductCard key={productIndex} product={product} />;
        })}
      </div>
    </main>
  );
}
