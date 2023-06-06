import React from 'react';
import {
  makeStyles
} from '@material-ui/styles';

import {
  Grid,
  Typography,
  Paper
} from '@material-ui/core';

import {
  Email as EmailIcon,
} from '@material-ui/icons';

const useStyles = makeStyles({
  espaco: {
    padding: '15px'
  }
})

function Cadastro() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.espaco}>
        <b>Cadastro</b>
      </Paper>
    </Grid>
  )
}

export default Cadastro;