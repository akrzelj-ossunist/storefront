"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import useGetProductsQuery from "../services/getProducts";
import ProductForm from "../components/ProductForm";
import { ICart } from "../interfaces/interface";

const page: React.FC<{ params: any }> = ({ params }) => {
  const [cart, setCart] = useState<Array<ICart>>(() => {
    if (typeof window !== "undefined")
      return JSON.parse(localStorage.getItem("cart")!) || [];
    return [];
  });

  const { data: productsData, isLoading } = useGetProductsQuery(params.product);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (isLoading) return <p>Loading...</p>;

  const productInfo = {
    id: productsData.product.id,
    img: productsData.product.thumbnail,
    name: productsData.product.title,
    price: productsData.product.variants[0].prices[1].amount + "EUR",
  };
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <Image
          src={productsData.product.thumbnail}
          alt="img"
          width={576}
          height={656}
          className="md:w-[576px] md:h-[656px]"
        />
        <div className="md:w-[576px] h-[656px] md:p-[67px] w-[350px] pt-16">
          <p className="text-[#111827] text-[30px] font-semibold">
            {productsData.product.title}
          </p>
          <p className="text-[#111827] text-[14px] mt-4">
            {productsData.product.variants[0].prices[1].amount} EUR
          </p>
          <p className="text-[#374151] text-[12px] my-8">
            {productsData.product.description}
          </p>
          <ProductForm
            sizes={productsData.product.options[0].values}
            info={productInfo}
            getCart={setCart}
            cart={cart}
          />
          <p className="font-semibold text-xs mt-4">Product details</p>
          <p className="font-semibold text-xs mt-2 mb-1">Material</p>
          <p className="text-[#374151] text-[10px]">
            {productsData.product.material
              ? productsData.product.material
              : "Cotton 100%"}
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
