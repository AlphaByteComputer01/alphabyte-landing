import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" />

      <div className="hero-grid">
        <div>
          <p className="hero-tag">
            AFRICA'S DIGITAL INFRASTRUCTURE
          </p>

          <h1>
            Building
            <span>Trust.</span>
            Digitally.
          </h1>

          <p className="hero-description">
            ALPHABYTE designs secure digital platforms that transform
            governance, education and commerce across Africa.
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

          <div className="hero-scroll">
            ↓ Scroll
          </div>
        </div>
      </div>
    </section>
  );
}