import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Nav({
  className = "",
  showCta = true,
}: {
  className?: string;
  showCta?: boolean;
}) {
  return (
    <nav
      className={twMerge(
        "w-full px-32 py-4 bg-accent-dark/20 backdrop-blur-md flex items-center justify-between",
        className
      )}
      // className="w-full px-32 py-4 bg-accent-dark/20 backdrop-blur-md flex items-center justify-between"
    >
      <Link href="/">
        <h1 className="font-serif text-3xl text-white">Galeri MISA</h1>
      </Link>
      {showCta && (
        <Link
          className="text-sm font-sans px-8 py-4 bg-primary text-accent rounded-full"
          href="/artwork_submission"
        >
          Submit Artwork
        </Link>
      )}
    </nav>
  );
}
