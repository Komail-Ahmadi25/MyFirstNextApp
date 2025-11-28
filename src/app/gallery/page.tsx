import Link from "next/link";
import { photos } from "../lib/photolib";
import Image from "next/image";
export default function page() {
  return (
    <div className="w-full mt-12 gap-12 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => (
        <div key={photo.id}>
          <Link href={`gallery/${photo.id}`}>
            <Image
              className="h-70 rounded-md border-2 border-white"
              src={photo.url}
              height={800}
              width={800}
              alt={`${photo.id}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
