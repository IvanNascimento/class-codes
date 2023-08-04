async function getUsers() {
  let u = await fetch("https://jsonplaceholder.typicode.com/users")
  let users = await u.json();
  return users;
}
async function getPosts() {
  let p = await fetch("https://jsonplaceholder.typicode.com/posts")
  let posts = await p.json();
  return posts;
}
async function getComments() {
  let c = await fetch("https://jsonplaceholder.typicode.com/comments")
  let comments = await c.json();
  return comments;
}
async function postsUsernames() {
  let users = await getUsers();
  let posts = await getPosts();

  for (p of posts) {
    for (u of users) {
      if (p.userId == u.id) {
        p.username = u.username;
        delete p.userId;
        break;
      }
    }
  }
  return posts;
}
async function comentarios() {
  let posts = await getPosts();
  let comments = await getComments();
  let lista = []

  for(p of posts) {
    for (c of comments) {
      if (p["id"] == c.postId) {
        lista.push(c);
      }
    }
    p["comments"] = lista;
    lista = [];
  }
  return posts;
}
async function comentariosDonos() {
  let comments = await getComments();
  let posts = await getPosts();
  let users = await getUsers();
  let lista = []

  for(p of posts) {
    for (c of comments) {
      if (p["id"] == c.postId) {
        lista.push(c);
      }
    }
    p["comments"] = lista;
    lista = [];
  }

  for (p of posts) {
    for (u of users) {
      if (p.userId == u.id) {
        p.name = u.name;
        p.username = u.username;
        delete p.userId;
        break;
      }
    }
  }

  return posts;
}

postsUsernames().then(res => {
  console.log("Questão 1");
  console.log(res);
});
comentarios().then(res => {
  console.log("Questão 2");
  console.log(res);
});
comentariosDonos().then(res => {
  console.log("Questão 3");
  console.log(res);
});
