"use client";

import Image from "next/image";
import useGetProductsQuery from "../services/getProducts";
import ProductForm from "../components/ProductForm";

const page: React.FC<{ params: any }> = ({ params }) => {
  const { data: productsData, isLoading } = useGetProductsQuery(params.product);
  if (!isLoading) console.log(productsData);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex justify-center flex-wrap">
          <Image
            src={productsData.product.thumbnail}
            alt="img"
            width={576}
            height={656}
            className="w-[576px] h-[656px]"
          />
          <div className="w-[576px] h-[656px] p-[67px]">
            <p>{productsData.product.title}</p>
            <p>{productsData.product.variants[0].prices[1].amount} EUR</p>
            <p>{productsData.product.description}</p>
            <ProductForm sizes={productsData.product.options[0].values} />
            <p>Product details</p>
            <p>Material</p>
            <p>
              {productsData.product.material
                ? productsData.product.material
                : "Cotton 100%"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
