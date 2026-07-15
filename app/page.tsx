import Hero from "@/components/hero/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <Hero />

      {/* MISSION */}
      <section className="section container">
        <h2>OUR MISSION</h2>
        <p className="subtitle">
          We build trusted digital systems that power the next generation of African institutions.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="section container">
        <h2>WHAT WE BUILD</h2>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          
          <div className="card">
            <h3>Univote</h3>
            <p>Secure digital voting platform.</p>
          </div>

          <div className="card">
            <h3>Kanah</h3>
            <p>Smart African commerce ecosystem.</p>
          </div>

          <div className="card">
            <h3>Solo Learning</h3>
            <p>Next-gen education platform.</p>
          </div>

        </div>
      </section>

    </main>
  );
}