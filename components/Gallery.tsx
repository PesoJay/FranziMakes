import Link from "next/link";
import { artworks } from "@/data/artworks";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {artworks.map((art) => (
        <Link key={art.slug} href={`/artwork/${art.slug}`}>
          <div className="cursor-pointer">
            <Image
              src={art.image}
              alt={art.title}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-2 text-sm">{art.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}