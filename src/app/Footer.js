import Link from "next/link";
export default function Footer() {
  return (
    <footer className="grid  md:grid-cols-4 max-md:gap-5 bg-black text-white   border-t border-solid px-4 border-slate-300 lg:px-16 py-8">
      <div className="flex flex-col  gap-5">
        <Link href={"/"}>
          <h1 className="uppercase cursor-pointer font-bold sm:text-xl md:text-2xl hover:scale-105">
            Book Store
          </h1>
        </Link>
        <div className=" text-xs md:text-sm">
          A simple e-commerce website for a local bookstore.
        </div>
      </div>
      <div className="flex flex-col lg:px-16 gap-5">
        <div className="sm:text-xl md:text-2xl cursor-pointer font-bold hover:scale-105">
          <Link href={"/products"}>Shop</Link>
        </div>
        <ul className=" text-xs md:text-sm">
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="flex flex-col lg:px-16  gap-5">
        <div className="sm:text-xl md:text-2xl cursor-pointer font-bold hover:scale-105">
          Account
        </div>
        <ul className=" text-xs md:text-sm">
          <li>Account</li>
          <li>Order History</li>
          <li>WishList</li>

          <li>
            {" "}
            <Link href={"/contact"}>Contact Us </Link>
          </li>
        </ul>
      </div>
      <div className="sm:text-xl lg:px-16 gap-5 flex  font-bold flex-col md:text-2xl ">
        Share
        <div className="flex gap-5">
          <Link href={"https://www.instagram.com/"} target="_blank">
            <i className="fa-brands fa-instagram  hover:scale-105 cursor-pointer text-2xl sm:text-3xl "></i>
          </Link>
          <Link href={"https://www.twitter.com/"} target="_blank">
            <i className="fa-brands fa-twitter   hover:scale-105 cursor-pointer text-2xl sm:text-3xl"></i>
          </Link>
          <Link href={"https://www.youtube.com/"} target="_blank">
            <i className="fa-brands fa-youtube  hover:scale-105 cursor-pointer text-2xl sm:text-3xl "></i>
          </Link>
          <Link href={"https://www.facebook.com/"} target="_blank">
            <i className="fa-brands fa-square-facebook  hover:scale-105 cursor-pointer text-2xl sm:text-3xl "></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
