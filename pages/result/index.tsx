import React, { useEffect } from 'react';
import LinearIndeterminate from '../../components/ProgressBar';
import { useFetchResult } from '../../hooks';
import ResultCard from '../../components/ResultCard'
import { Box, Container } from '@mui/material';

export const Result = () => {
  const { dataResult, fetchResult, loadingResult }: any = useFetchResult()

  useEffect(() => {
    fetchResult()
  }, [])

  if (loadingResult) return <LinearIndeterminate />

  return (
    <div style={{marginTop: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection: 'column',gap: 15,backgroundColor: 'rgb(124,204,171, 0.3)',padding: '3% 8%'}}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
     
    <Container maxWidth="sm">
        <Box sx={{ borderRadius: '2px', width: '500px', padding: '20px 50px 20px 50px' }}>

        {dataResult ? (
            <ResultCard
            brand={dataResult['Marca']}
            model={dataResult['Modelo']}
            year={dataResult['AnoModelo']}
            value={dataResult['Valor']}
            />
            ) : (
                <div />
        )}

        </Box>
      </Container>

   
      </div>
    </div>
       
  )
}

export default Result;