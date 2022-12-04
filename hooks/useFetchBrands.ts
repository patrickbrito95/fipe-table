import { useCallback } from "react";
import api from "../pages/api/api";

const useFetchBrands = async () => {
  try {
    const res = await api.get("/marcas");

    const { data } = res;
    if (!data) {
      console.error("Não foi possível encontrar as marcas de veículos. Tente novamente");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useFetchBrandsData = () => {
  const res = useCallback(async () => {
    const data = await useFetchBrands();
    return data;
  }, [useFetchBrands]);
  return { res };
};

export default useFetchBrandsData;