import Header from "./layouts/Header";
import Welcome from "./page/Welcome";
import Services from "./page/Services";
import Features from "./page/Features";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Services />
        <Features />
      </main>
    </>
  );
}
