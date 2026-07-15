import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="hero">
      <HeroBackground />

      <div className="hero-grid">
        <HeroContent />
      </div>

      <ScrollIndicator />
    </section>
  );
}