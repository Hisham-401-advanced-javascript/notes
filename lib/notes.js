'use strict';

function Notes () {
 
};

Notes.prototype.execute = function (options){
  if (options.action === 'add' || options.action === 'a') {
    this.add(options)
  } else {
    console.log('Enter a valid action')
  }
};

Notes.prototype.add = function (E){
  this.id = Math.random()*100;
  this.action = E.action;
  this.payload = E.payload;
  console.log(`Adding Note: ${this.payload}`)
};


module.exports = Notes;