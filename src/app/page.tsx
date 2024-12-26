import Image from "next/image";
import posterImg from "@/public/assets/posters.png";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <div className="flex items-center bg-primary md:h-96">
        <div className="space-y-7 p-10 text-center md:w-1/2">
          <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
          <p className="text-lg">Discover amazing products and great deals!</p>
        </div>
        <div className="hidden h-full md:block md:w-1/2">
          <Image
            src={posterImg}
            alt="Shopping Experience Poster"
            className="h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
