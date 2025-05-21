import { FaArrowDownLong } from "react-icons/fa6";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('./dummy_img/hero-image.png')",
        backgroundSize: "100%",
      }}
      className="w-full h-screen flex flex-col"
    >
      <Nav />
      <section className="px-32 pt-8 pb-16 flex flex-col justify-center grow">
        <div className="h-full">
          <h2 className="font-serif text-7xl w-1/2 leading-24 mb-4">
            Art speaks where words are unable to explain.
          </h2>
          <p className="font-sans text-2xl">&mdash; Mathiole</p>
        </div>
        <a
          className="hover:brightness-90 transition-all duration-300 place-self-center w-fit flex items-center gap-4 rounded-full bg-primary text-accent px-16 py-4 shadow-accent-dark/50 shadow-sm"
          href="#gallery"
        >
          Visit Gallery <FaArrowDownLong />
        </a>
      </section>
    </section>
  );
}
