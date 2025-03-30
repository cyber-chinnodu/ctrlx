import Link from "next/link";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <div className="md:flex bg-[#EDF0F4] justify-between items-center px-9 lg:px-24 py-6 md:py-10 z-10 relative">
      <div className="logo">
        <Link href="/">
          <img
            src="public/logo.png"
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>
      </div>
      
      {/* Mobile Menu Icon */}
      <div className="absolute right-6 top-6 md:hidden cursor-pointer">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-8">
        <ul className="absolute left-0 w-full bg-[#EDF0F4] font-semibold text-[#726FBD] text-sm opacity-0 transition-all duration-800 ease-in">
          <li className="px-12 py-3 rounded-xl cursor-pointer">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="px-12 py-3 rounded-xl cursor-pointer">
            <Link href="#">Membership</Link>
          </li>
          <li className="px-12 py-3 rounded-xl cursor-pointer">
            <Link href="#">Pricing</Link>
          </li>
          <li className="px-12 py-3 rounded-xl cursor-pointer">
            <Link href="#">Services</Link>
          </li>
          <li className="px-12 py-3 rounded-xl cursor-pointer bg-[#4E4AD0] text-white text-center">
            <Link href="/contact_us">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 font-semibold text-[#4E4AD0] text-sm">
        <Link href="/shop" className="hover:text-[#726FBD]">Shop</Link>
        <Link href="#" className="hover:text-[#726FBD]">Membership</Link>
        <Link href="#" className="hover:text-[#726FBD]">Pricing</Link>
        <Link href="#" className="hover:text-[#726FBD]">Services</Link>
      </div>

      {/* Contact Button */}
      <div className="hidden md:block">
        <Link
          href="/contact_us"
          className="font-semibold text-[#4E4AD0] border border-[#4E4AD0] text-sm py-3 px-6 rounded-xl hover:bg-[#4E4AD0] hover:text-white transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
