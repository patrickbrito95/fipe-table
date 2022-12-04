import { useData } from "./useData"
import { options } from "./utils"
import headers from "./utils/headers"


export const useFetchYear = () => {
  const { data, makeRequest, loading }: any = useData((brandId: string | null, modelId: string | null) =>
    headers.get(`carros/marcas/${brandId}/modelos/${modelId}/anos`)
  )

  return {
    dataYear: data,
    optionsYear: options(data) ||  [],
    loadingYear: loading,
    year: makeRequest,
  }
}