'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const myInputs = new Input();
const notes = new Notes();

notes.add(myInputs);

// myInputs.isValid() ? notes.execute(myInputs) : showError();

// function showError() {
//     console.log(`
//       api usage: --add or -a <note>
//       --add or -a adding new note
//   `);
//   }