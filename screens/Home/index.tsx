import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { CarSearchForm } from '../../components/CarSearchForm'
import { useAutomobileContext } from '../../context/useContext'
import { useFetchBrand } from '../../hooks/useBrands'
import { useFetchModel } from '../../hooks/useModels'
import { useFetchYear } from '../../hooks/useYears'


export const PageHomeContainer = () => {
  const { values, handleChange } = useAutomobileContext()
  const { optionsBrand, fetchBrand }: any = useFetchBrand()
  const { optionsModel, fetchModel }: any = useFetchModel()
  const { optionsYear, fetchYear }: any = useFetchYear()

  useEffect(() => {
    fetchBrand()
  }, [])

  return (
    <Box component="section" display="grid" alignItems="center" justifyContent="center" minHeight="100vh" color="#333">
      <div>
        <Typography align="center" variant="h4" fontWeight="bold" mb={1}>
          Tabela Fipe
        </Typography>
        <Typography align="center" variant="h6" fontWeight="bold" mb={2}>
          Consulte o valor de um veículo de forma gratuita
        </Typography>
        <CarSearchForm
          brandOptions={optionsBrand}
          modelOptions={optionsModel}
          yearOptions={optionsYear}
          values={values}
          handleChange={handleChange}
          model={fetchModel}
          year={fetchYear}
        />
      </div>
    </Box>
  )
}