import React from "react";
import { photos } from "../lib/photolib";

export default function page() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4">
      {photos.map((photo) => (
        <div>2
          <div>
            <Image
              className="h-52 mt-12 gap-4"
              src={photo.url}
              height={800}
              width={800}
              alt={`${photo.id}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
