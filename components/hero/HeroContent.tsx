import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="hero-content">

      <p className="hero-tag">
        AFRICA'S DIGITAL INFRASTRUCTURE
      </p>

      <h1>
        Building
        <span>Trust.</span>
        Digitally.
      </h1>

      <p className="hero-description">
        ALPHABYTE designs secure digital platforms
        that transform governance,
        education and commerce across Africa.
      </p>

      <div className="hero-buttons">

        <Link
          href="#products"
          className="btn-primary"
        >
          Explore Products
        </Link>

        <Link
          href="#vision"
          className="btn-secondary"
        >
          Our Vision
        </Link>

      </div>

    </div>
  );
}