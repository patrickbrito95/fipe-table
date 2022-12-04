
import { useApi } from './useData'
import { options } from './utils'
import headers from './utils/headers'

export const useFetchBrand = () => {
  const { data, makeRequest, loading } = useApi(() => headers.get(`carros/marcas`))

  return {
    dataBrand: data,
    optionsBrand: options(data) || [],
    loadingBrand: loading,
    fetchBrand: makeRequest,
  }
}