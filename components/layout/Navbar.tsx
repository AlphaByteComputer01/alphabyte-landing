import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">

        <Image
          src="/logo/alphabyte-logo.png"
          alt="ALPHABYTE Logo"
          width={48}
          height={48}
          priority
        />

        <div className="navbar-brand">

          <h1 translate="no">
            ALPHABYTE
          </h1>

          <p>
            Building Africa's Digital Infrastructure
          </p>

        </div>

      </div>

      <nav className="navbar-menu">

        <Link href="#vision">
          Vision
        </Link>

        <Link href="#products">
          Products
        </Link>

        <Link href="#roadmap">
          Roadmap
        </Link>

        <Link href="#founder">
          Founder
        </Link>

      </nav>

      <div className="navbar-actions">

        <button
          className="theme-button"
          aria-label="Theme Switch"
        >
          🌙
        </button>

        <Link
          href="#products"
          className="btn-primary"
        >
          Explore Products
        </Link>

      </div>

    </header>
  );
}