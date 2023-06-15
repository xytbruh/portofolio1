import Link from "next/link";
import Header from "./layouts/Header";
import Welcome from "./page/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
      </main>
    </>
  );
}
