import { useCallback } from "react";
import api from "../pages/api/api";

const useFetchModels = async (id: string) => {
  try {
    const res = await api.get(`/marcas/${id}/modelos`);
    const { data } = res;
    if (!data) {
      console.error("Não foi possível encontrar os modelos selecionados. Tente novamente mais tarde!");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useFetchModelsData = (id: string) => {
  const res = useCallback(async () => {
    const data = await useFetchModels(id);
    return data;
  }, [useFetchModels]);
  return { res };
};

export default useFetchModelsData;