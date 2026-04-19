export type Artwork = {
  slug: string;
  title: string;
  image: string;
  description?: string;
  year?: number;
};

export const artworks: Artwork[] = [
  {
    slug: "genos",
    title: "Genos",
    image: "/images/0.jpg",
    description: "Genos getting taught a lesson",
    year: 2024,
  },
  {
    slug: "Sea",
    title: "Sea",
    image: "/images/t2.jpg",
  },
];