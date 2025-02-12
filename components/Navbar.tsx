import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-icon hover:cursor-pointer" />
        <span className="logo-text hover:cursor-pointer" > <a href={"/"}>CTRLX</a> </span>
      </div>
      <ul className="nav-links">
        <li className="nav-links"><Link href="/shop">Shop</Link></li>
        <li><Link href="/membership">Membership</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/services">Services</Link></li>
      </ul>
      <Link href="/contact" className="contact-button">
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
