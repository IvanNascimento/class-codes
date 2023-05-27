const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4044;
const host = '0.0.0.0';

app.use(bp.json());
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


app.post('/sensores', (req, res, next) => {
  console.log(req.body);

  res.send({
    status: 200,
    message: 'Success'
  })
})

app.get('/', (req, res, next) => {
  res.send({
    status: 200,
    message: 'Listening'
  })
})

app.listen(port, host ,() => {
  console.log('Listening on port:', port); 
})