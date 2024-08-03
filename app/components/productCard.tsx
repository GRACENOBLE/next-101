import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useRouter } from "next/router";

const ProductCard = ({
  thumbnail,
  title,
  description,
}: {
  thumbnail: string;
  title: string;
  description: string;
}) => {
  return <Link className=" h-96 w-60 rounded flex flex-col justify-between pb-10" href={''}>
    <Image src={thumbnail} alt={''} width={1000} height={1000} className='object-cover max-h-52 rounded-t'/>
    <h3 className='px-2 font-bold'>{title}</h3>
    <p className='line-clamp-3 px-2'>{description}</p>
  </Link>;
};

export default ProductCard
