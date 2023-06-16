"use client";
import Image from "next/image";
import Link from "next/link";

interface IProduct {
  id: string;
  name: string;
  img: string;
  price: string;
}

const PrintProduct: React.FC<IProduct> = ({ id, name, img, price }) => {
  return (
    <Link href={`/${id}`} className="m-4 relative w-[275px] h-[316px]">
      <Image
        src={img}
        alt="product"
        width={276}
        height={285}
        className="w-[275px] h-[316px] rounded-md"
      />
      <p className="absolute bottom-1 text-xs left-2">{name}</p>
      <p className="absolute bottom-1 right-2 text-xs">{price} EUR</p>
    </Link>
  );
};

export default PrintProduct;
