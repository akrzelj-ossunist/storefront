import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
    try {
      const data = await axios.get("http://localhost:9000/store/products");
      return data.data
    } catch (error) {
      console.error(error);
    }
  };

const useGetProductsQuery = () => {
  return useQuery(["products"], () => getData())
}

export default useGetProductsQuery