"use client";
import Nav from "@/app/sections/Nav";
import Image from "next/image";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useForm } from "react-hook-form";
import { LuImage } from "react-icons/lu";

const FILE_TYPES = ["JPEG", "JPG", "PNG"];

type TArtwork = {
  image: File;
  title: string;
  artist: string;
  contact: string;
  caption: string;
};

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

export default function ArtworkSubmission() {
  const { register, handleSubmit } = useForm<TArtwork>();
  const [image, setImage] = useState<File | null>(null);
  function handleImageUpload(file: File) {
    setImage(file);
  }
  async function handleSubmission(data: TArtwork) {
    if (!image) return;
    data["image"] = image;
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    const url = `${BACKEND_URL}/api/artwork/`;
    const res = await fetch(url, {
      // headers: {
      //   "Content-Type": "application/json",
      // },
      method: "POST",
      body: formData,
    });
    console.log(res);
  }
  return (
    <main className="w-full h-screen bg-primary flex flex-col">
      <Nav className="bg-accent-dark" showCta={false} />
      <section
        id="artwork_submission"
        className="flex-1 w-full flex p-16 gap-16"
      >
        <form
          className="flex w-full gap-16"
          method="POST"
          // action={handleSubmission}
          onSubmit={handleSubmit(handleSubmission)}
        >
          <div className="w-1/2 flex flex-col justify-center items-center rounded-lg border-white border-dashed border-2 text-white gap-2">
            <FileUploader
              multiple={false}
              required={true}
              handleChange={handleImageUpload}
              name="image"
              types={FILE_TYPES}
              classes="relative w-full h-full flex flex-col justify-center items-center cursor-pointer text-white/75 group"
            >
              <p
                className={`z-10 ${
                  image ? "opacity-0 group-hover:opacity-100" : ""
                }`}
              >
                <LuImage className="mr-2 text-2xl inline" />
                <span className="font-medium">
                  {image ? "Upload new image" : "Upload image"}
                </span>
              </p>
              {image && (
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Uploaded image"
                  width={200}
                  height={200}
                  className="absolute w-fit h-full object-cover group-hover:brightness-75"
                />
              )}
            </FileUploader>
          </div>
          <div className="w-1/2 flex flex-col gap-4 text-accent">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="title" className="text-accent">
                Judul karya
              </label>
              <input
                // type="text"
                // name="title"
                // id="title"
                // required
                {...register("title")}
                placeholder="Masukkan judul karyamu"
                className="w-3/5 text-sm bg-white px-4 py-2 placeholder:text-black/50 rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="artist" className="text-accent">
                Nama Pembuat
              </label>
              <input
                // type="text"
                // name="artist"
                // id="artist"
                // required
                {...register("artist")}
                placeholder="Masukkan nama pembuat karya"
                className="w-3/5 text-sm bg-white px-4 py-2 placeholder:text-black/50 rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="contact" className="text-accent">
                Nomor Telepon
              </label>
              <input
                // name="contact"
                // type="tel"
                // id="contact"
                // required
                {...register("contact")}
                placeholder="Masukkan nomor teleponmu"
                className="w-3/5 text-sm bg-white px-4 py-2 placeholder:text-black/50 rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="caption" className="text-accent">
                Keterangan
              </label>
              <textarea
                {...register("caption")}
                // name="caption"
                // required
                placeholder="Tuliskan keterangan dari karyamu ini..."
                className="h-[12.5vh] w-full bg-white p-4 text-sm placeholder:text-black/50 rounded-lg"
              />
            </div>
            <button className="w-full bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/75 cursor-pointer">
              Submit Artwork
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
