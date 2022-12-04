
import { Box } from '@mui/material';
import Typography from '../Typography';
import { IResultCard } from './interface'

export const BoxResult = ({ brand, model, year, value }: IResultCard) => {
  return (
    <Box width='auto' display="flex" justifyContent='center' alignItems='center' flexDirection='column'>
      <Typography fontSize="23px" fontWeight="600" marginBottom='20px'>
        Tabela Fipe: Preço {brand} {model} {year}
      </Typography>
      <Box style={{ backgroundColor: '#009a8a', padding: '8px 15px', borderRadius: '27px', width: '100%', display: 'inline-block', margin: '0 auto' }}>
        <Typography fontSize='20px' fontWeight='600' fontColor="#FFFFFF">
          {value}
        </Typography>
      </Box>
      <Typography fontSize='14px' marginTop='20px'>
        Este é o Preço de compra do veículo
      </Typography>
    </Box>
  )
}

export default BoxResult;