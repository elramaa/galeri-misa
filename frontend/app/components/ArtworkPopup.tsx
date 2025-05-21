"use client";
import Image from "next/image";
import { SetStateAction } from "react";

type TArtwork = {
  id: number;
  title: string;
  artist: string;
  caption: string;
  image: string;
  setter: React.Dispatch<SetStateAction<TArtwork | null>>;
};

export default function ArtworkPopup({
  artwork,
}: {
  artwork: TArtwork | null;
}) {
  if (!artwork) return <></>;

  const { title, artist, caption, image } = artwork;
  return (
    <div className="fixed top-0 left-0 w-full h-full px-16 py-8 backdrop-blur-sm">
      <div className="w-full h-full flex items-center justify-center p-8 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="w-1/2 h-full bg-accent-dark">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="place-self-center w-fit h-full"
          />
        </div>
        <div className="w-1/2 h-full ">
          <h2 className="text-4xl font-bold text-accent">{title}</h2>
          <p className="text-sm font-light text-accent/50">1 April 2025</p>
          <p className="text-sm text-accent mb-8">Oleh {artist}</p>
          <p className=" text-accent">{caption}</p>
        </div>
      </div>
      <button
        className="absolute top-8 right-16 text-center size-12 flex justify-center items-center rounded-full bg-accent-dark text-primary text-xl -translate-y-1/2 translate-x-1/2 cursor-pointer"
        onClick={() => artwork.setter(null)}
      >
        X
      </button>
    </div>
  );
}
