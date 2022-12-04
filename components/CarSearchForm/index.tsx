import { Button } from '@mui/material'
import Link from 'next/link'
import FormBox from '../FormBox'
import { Select } from '../Select'
import { IFormSearch, IOptionSelect } from './interface'

export const CarSearchForm = ({
  brandOptions,
  modelOptions,
  yearOptions,
  values,
  handleChange,
  year,
  model,
}: IFormSearch) => {

  return (
    <FormBox>
      <Select
        options={brandOptions}
        label="Marca"
        value={values.brand}
        placeholder="Selecione a Marca"
        onChange={(value: IOptionSelect | null) => {
          handleChange(value, 'brand')
          model(value?.value)
        }}
      />
      <Select
        options={modelOptions}
        label="Modelo"
        value={values.model}
        placeholder="Selecione o Modelo"
        onChange={(value: IOptionSelect | null) => {
          handleChange(value, 'model')
          year(values.brand.value, value?.value)
        }}
      />
      {values.model && (
        <Select
          options={yearOptions}
          label="Ano"
          value={values.year}
          placeholder="Selecione o Ano"
          onChange={(value: IOptionSelect | null) => {
            handleChange(value, 'year')
          }}
        />
      )}
      <Link href="/result" passHref>
        <Button
          variant="contained"
          color="primary"
          disabled={!(values.brand && values.model && values.year)}
          size="large"
          sx={{ my: 2 }}
        >
          Consultar preço
        </Button>
      </Link>
    </FormBox>
  )
}