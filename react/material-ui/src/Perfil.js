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
  Person as PersonIcon
} from '@material-ui/icons';

const useStyles = makeStyles({
  espaco: {
    padding: '15px'
  }
})

function Perfil() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.espaco}>
        <Typography variant="h5" component="h5">
          <PersonIcon />
          Ivan Nascimento
        </Typography>
        <Typography variant="subtitle1">
          <EmailIcon />
          ivanluis431@gmail.com
        </Typography>
        <Typography variant="body1">
          dfsjgdkshfkjasçdlfjkgsau iao uyafuid  agjhasgjdagsdg
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Perfil;