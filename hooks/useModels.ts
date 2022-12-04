import { useData } from "./useData"
import { options } from "./utils"
import headers from "./utils/headers"


export const useFetchModel = () => {
  const { data, makeRequest, loading }: any = useData((brandId: string | null) => headers.get(`carros/marcas/${brandId}/modelos`))

  return {
    dataModel: data,
    optionsModel: options(data?.modelos) || [],
    loadingModel: loading,
    model: makeRequest,
  }
}