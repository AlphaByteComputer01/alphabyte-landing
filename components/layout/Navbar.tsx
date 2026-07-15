import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Image
          src="/logo/alphabyte-logo.png"
          alt="ALPHABYTE"
          width={42}
          height={42}
          priority
        />

        <div className="navbar-brand">
          <h2 translate="no">ALPHABYTE</h2>
          <span>
            Building Africa's Digital Infrastructure
          </span>
        </div>
      </div>

      <nav className="navbar-links">
        <a href="#vision">Vision</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}