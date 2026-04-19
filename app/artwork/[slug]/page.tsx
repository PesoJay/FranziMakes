import { artworks } from "@/data/artworks";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return artworks.map((art) => ({
    slug: art.slug,
  }));
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const art = artworks.find((a) => a.slug === slug);

  if (!art) return notFound();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={art.image} alt={art.title} className="w-full rounded-lg" />
      <h1 className="text-2xl mt-4">{art.title}</h1>
      {art.year && <p>{art.year}</p>}
      {art.description && <p className="mt-2">{art.description}</p>}
    </div>
  );
}