import { PRODUCT_URL } from "@/constants";
import React from "react";
import ProductCard from "../components/productCard";

const page = async () => {

  const data = await fetch(PRODUCT_URL)
    .then((res) => res.json())
    .then((res) => res.products);

  //console.log(data[0]);

  return (
    <div className="flex flex-wrap justify-between gap-10 mt-10">
      {data.map(
        ({
          thumbnail,
          title,
          description,
        }: {
          thumbnail: string;
          title: string;
          description: string;
        }) => (
          <ProductCard
            thumbnail={thumbnail}
            title={title}
            description={description}
          />
        )
      )}
    </div>
  );
};

export default page; 
