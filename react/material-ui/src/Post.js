import React from 'react';
import {
  Grid, Paper, Box, Typography,
  IconButton, TextField
} from '@material-ui/core';
import {
  Send as SendIcon,
  ThumbUp as LikeIcon,
  Flag as FlagIcon,
} from '@material-ui/icons';

function Post(props) {
  return (
    <Grid item xs={12}>
      <Paper>
        <Box p={2} m={2}>
          <Grid container justify="space-between">
            <Grid item xs={2}>
              <Typography variant="body1">
                {props.nome ? props.nome : 'Anônimo'}
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography variant="body2">
                {props.data}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid item xs>
              <Typography variant="body2">
                {props.texto}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Grid container direction="row" justify="flex-start" alignItems="center">
              <Grid item xs="auto">
                <IconButton color="primary" aria-label="Curtir">
                  <LikeIcon />
                </IconButton>
              </Grid>
              <Grid item xs>
                <Typography variant="subtitle2">
                  Você e X pessoas curtiram
               </Typography>
              </Grid>
              <Grid item xs="auto">
                <IconButton color="secondary" aria-label="Reportar">
                  <FlagIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Grid item xs>
              <TextField fullWidth placeholder="Comentar..." margin="normal" />
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
  );
}

export default Post;