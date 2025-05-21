import { FaInstagram, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full px-32 py-16 bg-accent-dark">
      <div className="text-primary mb-16">
        <h2 className="font-serif text-3xl leading-loose">Galeri MISA</h2>
        <p>A place to express your feelings</p>
      </div>
      <ul className="max-w-1/3 flex flex-col gap-4 text-primary">
        <li className="flex items-center gap-4">
          <i className="flex size-8 items-center justify-center">
            <FaLocationDot className="text-3xl" />
          </i>
          Jl. Tugu No.1, Kiduldalem, Kec. Klojen, Kota Malang, Jawa Timur 65111
        </li>
        <li>
          <a
            href="https://www.instagram.com/sman1malang/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <i className="flex size-8 items-center justify-center">
              <FaInstagram className="text-3xl" />
            </i>
            @sman1malang
          </a>
        </li>
      </ul>
    </footer>
  );
}
