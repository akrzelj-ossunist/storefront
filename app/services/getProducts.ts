import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async (productID?: string) => {
    try {
      const data = await axios.get(productID ? `http://localhost:9000/store/products/${productID}` : "http://localhost:9000/store/products");
      return data.data
    } catch (error) {
      console.error(error);
    }
  };

const useGetProductsQuery = (productID?: string) => {
  return useQuery([productID], () => getData(productID))
}

export default useGetProductsQuery