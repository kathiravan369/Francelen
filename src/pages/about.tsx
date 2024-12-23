import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "@/containers/AboutUs";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>RajSundari- About us</title>
        <meta name="description" content="Raj Sundari Real Estate Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Raj Sundari Infrastructure Pvt. Ltd., real estate, sustainable development, residential homestead conversion properties, environmentally responsible practices, green spaces, stunning architecture, urban amenities, sustainable communities, vibrant green belts, real estate innovation, luxurious living, sustainable living, energy-efficient designs, preservation of natural habitats, opulent living spaces, world-class amenities, eco-friendly practices, luxury living, environmental stewardship, trust and transparency, ethical standards in real estate, architecture and nature integration, creating a better future in real estate, legacy of environmental stewardship"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar selectedPage="/about" />
        <AboutUs />
        <Footer />
        <script
          id="messenger-widget-b"
          src="https://cdn.botpenguin.com/website-bot.js"
          defer
        >
          66a1faa988488e2d82544e75,66a1fa87c645282b742d1f3e
        </script>
      </main>
    </>
  );
}
