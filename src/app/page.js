import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header.jsx"; // Capitalized 'header' to 'Header'
import Footer from "./components/footer.jsx"; // Fixed 'form' to 'from' and capitalized 'footer' to 'Footer'
import Hero1 from "./components/hero_1_main"; // Ensure the file name and path are correct
import Hero2 from "./components/hero_2_offer";
import Hero3 from "./components/hero_3_about";
import Hero4 from "./components/hero_4_clients";
import Hero5 from "./components/hero_5_contacts";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />

      </main>
      
   
     
    </div>
  );
}
