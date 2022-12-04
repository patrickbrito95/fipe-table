import { Autocomplete, TextField } from '@mui/material'
import { ISelectProps } from './interface'

export const Select = (props: ISelectProps) => {
  return (
    <Autocomplete
      isOptionEqualToValue={(option: object, value: object) => option === value}
      disablePortal
      options={props.options}
      onChange={(event: any, value: any) => props.onChange(value)}
      value={props.value}
      placeholder={props.placeholder}
      sx={{ width: '90%', my: 2 }}
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
          label={props.label}
          variant="filled"
          color="primary"
        />
      )}
    />
  )
}