import { Box } from '@mui/material'

import { useEffect } from 'react'
import {CarSearchForm} from '../../components/CarSearchForm'
import Typography from '../../components/Typography'
import { useAutomobileContext } from '../../context/useContext'
import { useFetchBrand } from '../../hooks/useBrands'
import { useFetchModel } from '../../hooks/useModels'
import { useFetchYear } from '../../hooks/useYears'


export const HomePage = () => {
  const { values, handleChange } = useAutomobileContext()
  const { optionsBrand, fetchBrand }: any = useFetchBrand()
  const { optionsModel, model }: any = useFetchModel()
  const { optionsYear, year }: any = useFetchYear()

  useEffect(() => {
    fetchBrand()
  }, [])

  return (
    <Box component="section" display="grid" alignItems="center" justifyContent="center" minHeight="100vh" color="#333">
      <div>
        <Typography fontSize='30px'>
          Tabela Fipe
        </Typography>
        <Typography fontSize='25px'>
          Consulte o valor de um veículo de forma gratuita
        </Typography>
        <CarSearchForm
          brandOptions={optionsBrand}
          modelOptions={optionsModel}
          yearOptions={optionsYear}
          values={values}
          handleChange={handleChange}
          model={model}
          year={year}
        />
      </div>
    </Box>
  )
}