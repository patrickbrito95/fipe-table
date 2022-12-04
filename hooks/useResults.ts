import { useAutomobileContext } from "../context/useContext"
import { useData } from "./useData"
import headers from "./utils/headers"


export const useFetchResult = () => {
  const { values } = useAutomobileContext()
  const {brand, model, year}: any = values
  const { data, makeRequest, loading } = useData(() =>
    headers.get(`carros/marcas/${brand.value}/modelos/${model.value}/anos/${year.value}`)
  )

  return {
    dataResult: data,
    loadingResult: loading,
    fetchResult: makeRequest,
  }
}