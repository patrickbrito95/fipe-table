import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface IFormBox {
    children: any;
}

export default function FormBox(props: IFormBox) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#ffffff', height: '300px', boxShadow: '1px 1px 2px 0px #e7e7e7;', borderRadius: '2px' }}>
        {props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}