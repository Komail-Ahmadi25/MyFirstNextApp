import { photos } from "@/app/lib/photolib";
import Image from "next/image";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const photoid = (await params).id;
  const photoidInteger = Number(photoid);
  const currentPhoto = photos.filter((photo) => photo.id === photoidInteger);
  return (
    <div className="w-full bg-transparent flex mt-12 justify-center items-center">
      <div className="w-96 h-96">
        {currentPhoto.map((photo) => (
          <Image
            key={photo.id}
            className="w-full h-full object-cover "
            height={1000}
            width={1000}
            src={photo.url}
            alt={`${photo.id}`}
          />
        ))}
      </div>
    </div>
  );
}
export default page;
