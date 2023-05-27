import React from 'react';
import {
  makeStyles
} from '@material-ui/styles';

import {
  Grid,
  Paper,
  TextField,
  InputAdornment
} from '@material-ui/core';

import {
  Person as PersonIcon
} from '@material-ui/icons';

const useStyles = makeStyles({
  espaco: {
    padding: '15px'
  },
  layout: {
    display: 'flex'
  }
})

function EditarPerfil() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.espaco}>
        <TextField 
        label="Nome de usuário" 
        className={classes.layout} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}/>
        <TextField 
        label="Biografia" 
        className={classes.layout} 
        multiline rowsMax={4} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }} />
      </Paper>
    </Grid>
  )
}

export default EditarPerfil;