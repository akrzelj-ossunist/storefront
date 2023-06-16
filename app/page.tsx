"use client";

import useGetProductsQuery from "./services/getProducts";

export default function Home() {
  const { data: productsData, isLoading } = useGetProductsQuery();

  return (
    <>{isLoading ? <p>Loading</p> : <p>{JSON.stringify(productsData)}</p>}</>
  );
}
