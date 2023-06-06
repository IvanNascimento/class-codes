var db = firebase.firestore();
var storage = firebase.storage();

db.collection("messages")
  .orderBy("timestamp", "desc")
  .onSnapshot(snapshot => {
    let feed = document.getElementById("feed");
    feed.innerHTML = "";
    snapshot.forEach(imagem => {
      let doc = imagem.data();
      let id = imagem.id;
      montarMsg(id, doc)
        .then(div => {
          if(doc.flags.length < 6) {
            feed.appendChild(div);
          }
        })
    })
  })

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    db.collection('users')
      .where('email','==',user.email)
      .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          let user = doc.data();

          document.getElementById("nome").innerText = user.username;
          document.getElementById("bio").innerText = user.bio;
          document.getElementById("aniversario").innerText = formatDate(user.birthdate);
          document.getElementById("sexo").innerText = user.gender;
          document.getElementById("situacao").innerText = user.status;

          storage
            .ref()
            .child(user.photo)
            .getDownloadURL()
            .then(url => {
              document.getElementById("photo").src = url;
            })
        })
      })
  } else {
    window.location.replace("index.html");
  }
})

async function sendMessage() {
  let anonimo = document.getElementById("anon").value;
  let msg = document.getElementById("msg").value;
  let user = await getUser();

  let message = {
    anonymous: (anonimo === "y" ? true : false),
    from: user.email,
    text: msg,
    timestamp: new Date(),
    answers: [],
    likes: [],
    flags: []
  }

  db.collection('messages')
    .doc().set(message)
    .then(res => {
      console.log("Mensagem enviada!");
    });
}
function getUser() {
  return new Promise((res, rej) => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        db.collection('users')
          .where('email','==',user.email)
          .onSnapshot(snapshot => {
            snapshot.forEach(doc => {
              let dbUser = doc.data();
              dbUser.id = doc.id;
              res(dbUser);
              return;
            });
          });
      }else {
        rej(new Error("Não está conectado"));
      }
      return;
    })
  })
}
function findUser(email) {
  return new Promise((res, rej) => {
    db.collection('users')
      .where('email','==',user.email)
      .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          let user = doc.data();

          if(user.email == email) {
            res(user);
            return;
          }
        });
        rej(new Error("Usuário não encontrado"));
      });
  });
}
async function montarMsg(id, doc) {
  let user = await getUser();

  let div = document.createElement("div");
  let anon = document.createElement("p");
  let time = document.createElement("p");
  let msg = document.createElement("p");
  let likes = document.createElement("p");
  let likeBtn = document.createElement("button");
  let flagBtn = document.createElement("button");

  div.setAttribute('style', 'border: 2px solid #ccc');

  anon.innerHTML = (doc.anonymous == true ? "Anonymous" : doc.from);
  time.innerHTML = formatDate(doc.timestamp);
  msg.innerHTML = doc.text;
  likes.innerHTML = doc.likes.length + " curtidas";
  likeBtn.innerHTML = doc.likes.indexOf(user.id) >= 0 ? "Descurtir":"Curtir";
  flagBtn.innerHTML = doc.flags.indexOf(user.id) >= 0 ? "Retirar denuncia":"Denunciar";
  likeBtn.onclick = function() {
    let index = doc.likes.indexOf(user.id);

    if(index >= 0) {
      doc.likes.splice(index, 1);
    }else {
      doc.likes.push(user.id);
    }
    db.collection('messages').doc(id).update(doc);
  }
  flagBtn.onclick = function() {
    let index = doc.flags.indexOf(user.id);

    if(index >= 0) {
      doc.flags.splice(index, 1);
    }else {
      doc.flags.push(user.id);
    }
    db.collection('messages').doc(id).update(doc);
  }

  div.appendChild(anon);
  div.appendChild(time);
  div.appendChild(msg);
  div.appendChild(likes);
  div.appendChild(likeBtn);
  div.appendChild(flagBtn);

  return div;
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

  return `${day}/${month}/${year} ${h}:${m}:${s}`;
}
