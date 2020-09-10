'use strict';

const schema = require('./model/notes-schema');

class Notes {
  constructor() {
  }
  add(anyNote) {
    if (anyNote) {
      let note = new schema(anyNote) 
      }

      // console.log(anyNote);
    }
  }



module.exports = Notes;

