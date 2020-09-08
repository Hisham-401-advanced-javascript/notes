'use strict';

class Notes {
  constructor() {
  }
  add(anyNote) {
    if (anyNote) {
      let id = Math.ceil(Math.random() * 10);
      var idObj = {};
      if (anyNote.note.payload !== null || anyNote.note.action !== null) {
        idObj[`id = ${id}`] = anyNote.note.payload;
        console.log('action:', anyNote.note.action);
        console.log(idObj);
      }

      // console.log(anyNote);
    }
  }
}


module.exports = Notes;

