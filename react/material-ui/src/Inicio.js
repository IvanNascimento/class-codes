import React from 'react';
import * as firebase from 'firebase';
import Post from './Post';
import {
  Grid
} from '@material-ui/core';

class Inicio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let db = firebase.firestore();

    db.collection("messages").onSnapshot((snapshot) => {
      let posts = [];
      for (let doc of snapshot.docs) {
        posts.push(doc.data());
      }
      this.setState({ posts })
    });
  }

  render() {
    var posts = this.state.posts.map(
      (post, i) => <Post key={i} nome={post.from} texto={post.text} data="10/06/2019 12:11" />
    );
    return (
      <Grid container>
        {posts}
      </Grid>
    );
  }
}

export default Inicio;
