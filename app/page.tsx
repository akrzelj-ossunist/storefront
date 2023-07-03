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
        <div className="flex flex-col items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
            {productsData.products.map((product: any, index: number) => (
              <PrintProduct
                key={index}
                id={product.id}
                name={product.title}
                img={product.thumbnail}
                price={product.variants[0].prices[1].amount}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
