'use strict';

const mongoose = require('mongoose');
require('dotenv').config('.env');

const URL = process.env.URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}) .then(() => {
  console.log('connected');
}).catch((err) => console.log(err));

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const myInputs = new Input();
const notes = new Notes();

notes.add(myInputs);





// if (myInputs.valid()) {
//   notes.execute(myInputs.command)
//     .then(result => {
//       if (myInputs.command == 'List') {
//         const notes = result;
//         notes.forEach(note => {
//           console.log(note.text);
//           console.log('');
//           console.log(` Category: ${note.category}\t`);
//           console.log('--------------------------------\n');
//         });
//       }
//     })
//     .then(mongoose.disconnect)
//     .catch(error => console.error(error));
// } 
// else {
//   help();
// }

// function help () {
//   console.log('Error!');
//   process.exit();
// }
