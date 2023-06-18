"use client";

import PrintProduct from "./components/PrintProduct";
import useGetProductsQuery from "./services/getProducts";

export default function Home() {
  const { data: productsData, isLoading } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-[1152px] justify-items-center">
            {productsData.products.map((product: any, index: number) => (
              <PrintProduct
                key={index}
                id={product.id}
                name={product.title}
                img={product.thumbnail}
                price={"xxx"}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
