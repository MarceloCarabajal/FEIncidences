import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


function IncidenceButton({ onClick }) {
  return (
    <Button variant='outlined' color='primary' onClick={onClick} py={0} sx={{height:40}}><AddIcon fontSize='small' />
        <Typography pl={0.5}>
        Nueva Incidencia
        </Typography>
    </Button>
  );
}

export default IncidenceButton;