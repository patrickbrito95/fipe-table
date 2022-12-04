import { Autocomplete, TextField } from '@mui/material'
import { ISelectProps } from './interface'

export const Select = ({ options, label, onChange, value, placeholder }: ISelectProps) => {
  return (
    <Autocomplete
      isOptionEqualToValue={(option: any, value: any) => option.iso === value.iso}
      disablePortal
      options={options}
      onChange={(event: any, value: any) => onChange(value)}
      value={value}
      placeholder={placeholder}
      sx={{ width: '100%', my: 2 }}
      renderInput={(params: any) => (
        <TextField
          {...params}
          size='small'
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
            style: {
              backgroundColor: 'transparent',
              border: '1px solid #B9B9B9',
              borderRadius: '4px',
            },
          }}
          label={label}
          variant="filled"
          color="primary"
        />
      )}
    />
  )
}