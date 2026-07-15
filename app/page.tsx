import Mission from "@/components/sections/Mission";
import Vision from "@/components/sections/Vision";
import Pillars from "@/components/sections/Pillars";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <main>

      <Navbar />

      {/* HERO */}
      <Hero />

      {/* MISSION */}

      <Mission />

      {/* VISION */}

      <Vision />

      {/* CORE PILLARS */}

      <Pillars />

      {/* PRODUCTS */}

      <section
        id="products"
        className="section container"
      >

        <h2>WHAT WE BUILD</h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
          }}
        >

          <div className="card">

            <h3>UniVote</h3>

            <p>
              Secure digital voting platform.
            </p>

          </div>

          <div className="card">

            <h3>Kanah</h3>

            <p>
              Smart African commerce ecosystem.
            </p>

          </div>

          <div className="card">

            <h3>Solo Learning</h3>

            <p>
              Next-generation education platform.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}