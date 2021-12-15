const http = require("http");

const express = require('express');
const app = express();

const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://santinomin:1234@cluster0.mbbeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, 
}).then(() => console.log('MongoDB Connected...'))
  .catch( err => console.log(err))


const robots = ['Sangmin', 'Changsoo', 'Donghyun', 'Junyoung']; 

app.get('/', (request, response) => {
    response.end('<h1> Welcome ! </h1>')
});

app.get('/robots', (request, response) => {
      response.end(`<h1>${users}</h1>`)
});

app.get('/robots/:id', (request, response) => {
  const robotName = robots[request.params.id - 1];
  response.end(`<h1>${robotName}</h1>`)
})

app.get('*', (request, response) => {
  response.end('<h1>Page Not Available</h1>');
})

app.listen(port, () => {
  console.log('MongoDB connected...')
});

// const server = http.createServer((request, response) => { // Arrow Function, const
//   if (request.url === '/') {
//     response.end('<h1>Welcome!</h1>');
//   } else if (request.url === '/users') {
//     response.end(`<h1>${users}/h1>`); // Template String
//   } else if (request.url.split('/')[1] === 'users') {
//     //url : /users/1, /users/2, ..
//     const userIdx = request.url.split('/')[2]; // const
//     const userName = users[userIdx-1]; // const

//     response.end(`<h1>${userName}</h1>`); // Template String
//   } else {
//     response.end('<h1>Page Not Available</h1>');
//   }
// });

