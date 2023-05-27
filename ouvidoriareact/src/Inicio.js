import React from 'react';
import {
  makeStyles
} from '@material-ui/styles';

import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

import {
  Grid,
  Typography,
  Paper,
  TextField,
  IconButton,
  Box,
  FormControl,
  Select,
  MenuItem
} from '@material-ui/core';

import {
  Send as SendIcon,
} from '@material-ui/icons';
import Mensagem from './Mensagem';

const useStyles = makeStyles({
  espaco: {
    padding: '15px'
  },
  selectEmpty: {
    marginTop: '2px',
  },
  formControl: {
    margin: '1px',
    minWidth: 120,
  },
})

// var enviarMsg = function() {
//   getInputs();
//   let doc = db.collection('messages').doc();

//   let mensagem = {
//     text: msg.value,
//     data: new Date(),
//     tipo: tipo.value,
//     publica: publica.checked,
//     usuario: userEmail,
//     respostas: []
//   }

//   let arquivo = foto.files[0];
//   let id = doc.id;

//   if(arquivo) {
//     let ref = storage.ref().child('photos/'+id);
//     ref.put(arquivo, {
//       contentType: arquivo.type
//     }).then(snapshot => {
//       console.log(snapshot);
//     })
//     mensagem.foto = 'photos/'+id;
//   }
//   doc.set(mensagem)
//     .then(res => {
//       console.log("Mensagem enviada");
//     })
// }

class Inicio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      tipo: ''
    }
  }

  componentDidMount() {
    let db = firebase.firestore();

    db.collection("messages").onSnapshot((snapshot) => {
      let posts = [];
      for (let doc of snapshot.docs) {
        let arq = doc.data();
        if (arq.publica) {
          posts.push(arq);
        }
      }
      this.setState({ posts })
      console.log(posts)
    });
  }

  render() {
    var classes = useStyles();
    var posts = this.state.posts.map(
      (post, i) => <Mensagem key={i} usuario={post.usuario} tipo={post.tipo} texto={post.text} data={post.data} />
    );
    return (
      <Grid container>
        <Grid item xs>
          <Paper>
            <Box p={2} m={2}>
              <Grid container direction='row' justify="space-between">
                <Grid item xs>
                  <TextField fullWidth placeholder='Reclamação...' margin='normal' />
                </Grid>
              </Grid>
              <Grid container direction='row' justify='space-between'>
                <Grid item xs>
                  <FormControl>
                    <Select
                      value={this.state.tipo}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value='' disabled>
                        Selecione um tipo
                    </MenuItem>
                      <MenuItem value={1}>Reclamação</MenuItem>
                      <MenuItem value={2}>Denuncia</MenuItem>
                      <MenuItem value={3}>Sugestão</MenuItem>
                      <MenuItem value={4}>Elogios</MenuItem>
                      <MenuItem value={5}>Outros</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs>
                  <IconButton color="primary" aria-label="Enviar">
                    <SendIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        {posts}
      </Grid>
    );
  }
}

export default Inicio;