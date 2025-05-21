"use client";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";

import { FaChevronDown } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import ArtworkPopup from "../components/ArtworkPopup";
import { getArtworks } from "../utils/api";

type TArtwork = {
  id: number;
  title: string;
  artist: string;
  caption: string;
  image: string;
  setter: React.Dispatch<SetStateAction<TArtwork | null>>;
};

export default function Gallery() {
  const [artworkViewed, setArtworkViewed] = useState<TArtwork | null>(null);
  const [artworks, setArtworks] = useState<TArtwork[]>([]);
  useEffect(() => {
    (async () => {
      setArtworks(await getArtworks());
    })();
  }, []);
  function viewArtwork(artwork: {
    id: number;
    title: string;
    artist: string;
    caption: string;
    image: string;
  }) {
    setArtworkViewed({ ...artwork, setter: setArtworkViewed });
  }
  return (
    <section id="gallery" className="bg-primary px-32 py-16">
      <div className="w-full flex justify-center items-center">
        <h2 className="font-medium text-3xl text-center text-accent relative after:content-[''] after:block after:absolute after:w-1/2 after:h-1 after:bg-accent after:rounded-full after:-bottom-2 after:left-1/2 after:-translate-x-1/2">
          Gallery
        </h2>
      </div>
      <div className="w-full flex justify-end items-center gap-8 my-16 divide-accent">
        <SortInput />
        <SearchBar />
      </div>
      <div className="flex gap-8">
        {/* Column 1 */}
        <div className="w-1/3 flex flex-col gap-8">
          {artworks.slice(0, Math.ceil(artworks.length / 3)).map((artwork) => (
            <Artwork
              key={artwork.id}
              title={artwork.title}
              artist={artwork.artist}
              image={artwork.image}
              viewArtwork={() => viewArtwork(artwork)}
            />
          ))}
        </div>
        {/* Column 2 */}
        <div className="w-1/3 flex flex-col gap-8">
          {artworks
            .slice(
              Math.ceil(artworks.length / 3),
              Math.ceil((artworks.length * 2) / 3)
            )
            .map((artwork) => (
              <Artwork
                key={artwork.id}
                title={artwork.title}
                artist={artwork.artist}
                image={artwork.image}
                viewArtwork={() => viewArtwork(artwork)}
              />
            ))}
        </div>
        {/* Column 3 */}
        <div className="w-1/3 flex flex-col gap-8">
          {artworks
            .slice(Math.ceil((artworks.length * 2) / 3), artworks.length)
            .map((artwork) => (
              <Artwork
                key={artwork.id}
                title={artwork.title}
                artist={artwork.artist}
                image={artwork.image}
                viewArtwork={() => viewArtwork(artwork)}
              />
            ))}
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <button className="hover:bg-white/70 transition-colors duration-300 ease-out cursor-pointer rounded-full px-16 py-4 bg-white text-accent shadow-accent/20 shadow-md">
          Load More
        </button>
      </div>
      <ArtworkPopup artwork={artworkViewed} />
    </section>
  );
}

function Artwork({
  title,
  artist,
  image,
  viewArtwork,
}: {
  title: string;
  artist: string;
  image: string;
  viewArtwork: () => void;
}) {
  console.log(image);
  return (
    <div
      className="cursor-pointer w-full rounded-2xl relative flex flex-col gap-4 overflow-hidden"
      onClick={viewArtwork}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        className="w-full hover:scale-125 duration-300 transition-transform ease-in-out"
      />
      <div className="absolute w-full bg-white/5 backdrop-blur-xs px-8 py-4 bottom-0 left-0">
        <h3 className="font-sans text-lg text-primary">{title}</h3>
        <p className="font-sans text-xs text-primary/75">{artist}</p>
      </div>
    </div>
  );
}

function SortInput() {
  return (
    <form className="flex px-8 py-4 rounded-2xl bg-white text-accent font-medium gap-8 shadow-accent/25 shadow-md">
      <div>Sort by:</div>
      <p className="flex items-center gap-2">
        Recently Submitted <FaChevronDown className="inline" />
      </p>
    </form>
  );
}

function SearchBar() {
  return (
    <form
      method="POST"
      className="w-1/3 flex px-8 py-4 gap-4 rounded-2xl bg-white text-accent shadow-accent/25 shadow-md"
    >
      <input
        type="text"
        name="artwork"
        id="search_artwork"
        placeholder="Search"
        className="w-full font-medium placeholder:font-medium outline-none"
      />
      <button type="submit">
        <LuSearch className="stroke-accent scale-150" />
      </button>
    </form>
  );
}
