import React from 'react';
import {
  makeStyles
} from '@material-ui/styles';

import {
  Grid,
  Typography,
  Paper,
  Box,
  IconButton,
  TextField,
} from '@material-ui/core';

import {
  Send as SendIcon,
} from '@material-ui/icons';

const useStyles = makeStyles({
  espaco: {
    padding: '15px'
  }
})

function Mensagem(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.espaco}>
        <Box p={2} m={2}>
          <Grid container justify='space-between'>
            <Grid item xs>
              <Typography variant='body1'>
                {props.usuario}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='body2'>
                {converterTipo(props.tipo)}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant='body2'>
                {formatDate(props.data)}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify='space-between'>
            <Grid item xs>
              {props.texto}
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Grid item xs>
              <TextField fullWidth placeholder="Adicionar um comentario..." margin="normal" />
            </Grid>
            <Grid item xs="auto">
              <IconButton color="primary" aria-label="Enviar">
                <SendIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  )
}

function formatDate(data) {
  // transforma de segundos para milisegundos
  let d = new Date(data.seconds * 1000);
  // Isso é para colocar no formato que vai no input type data
  let year = d.getFullYear();
  // < 9 pq começa com 0. quando for 9 é na vdd 10
  let month = d.getMonth() < 9 ? `0${d.getMonth()+1}`:`${d.getMonth()+1}`;
  let day = d.getDate() < 10 ? `0${d.getDate()}`:`${d.getDate()}`

  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  h = h < 10 ? `0${h}`:h;
  m = m < 10 ? `0${m}`:m;
  s = s < 10 ? `0${s}`:s;

  return `${day}/${month}/${year} às ${h}:${m}:${s}`;
}

function converterTipo(a) {
  switch(a) {
    case "1":
      return 'Reclamação'
    case '2':
      return 'Denuncia'
    case '3':
      return 'Suguestão'
    case '4':
      return 'Elogios'
    case '5':
      return 'Outros'
  }
}

export default Mensagem;