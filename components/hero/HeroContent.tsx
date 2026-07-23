import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="hero-content fade">

      <p className="hero-tag">
        AFRICA'S DIGITAL INFRASTRUCTURE
      </p>

      <h1 className="hero-title">
        Building
        <span>Trust.</span>
        Digitally.
      </h1>

      <p className="hero-description hero-text">
        ALPHABYTE designs secure digital platforms
        that transform governance,
        education and commerce across Africa.
      </p>

      <div className="hero-buttons hero-actions">

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