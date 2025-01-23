import Stripe from "stripe";
import ProductCard from "../ProductCard";

async function getStripeProducts() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-04-10",
    });
    const res = await stripe.prices.list({
      expand: ["data.product"],
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Handle errors appropriately
  }
}

export default async function Home() {
  const products = await getStripeProducts();
  return (
    <main className="flex flex-col bg-slate-200">
      <div className="w-full md:px-10 px-5 grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
        {products.map((product, productIndex) => (
          <ProductCard key={productIndex} product={product} />
        ))}
      </div>
    </main>
  );
}
