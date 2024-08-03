"use client";

import Image from "next/image";

type foodProps = {
  image: string;
  name: string;
  keywords: string;
};

const FoodCard = ({ image, name, keywords }: foodProps) => {
  return (
    <div className="bg-green-100 p-4">
      <Image
        src={"https://image.tmdb.org/t/p/w500/"+image}
        alt={""}
        width={300}
        height={300}
        className="object-cover h-[300px]"
      />

      <h2 className="font-semibold mb-2 text-lg">{name}</h2>
      <p className="text-gray-500 mb-2 text-xs line-clamp-2">{keywords}</p>
    </div>
  );
};

export default FoodCard;
