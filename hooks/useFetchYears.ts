import { useCallback } from "react";
import api from "../pages/api/api";

const useFetchYears = async () => {
  try {
    const response = await api.get(`/marcas/59/modelos/5940/anos`);
    const { data } = response;
    if (!data) {
      console.error("Ocorreu um erro em anos!");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useFetchYearsData = () => {
  const response = useCallback(async () => {
    const data = await useFetchYears();
    return data;
  }, [useFetchYears]);
  return { response };
};

export default useFetchYearsData;