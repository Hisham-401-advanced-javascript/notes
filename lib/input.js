'use strict'; 

// capturing the input args. (minimist) + Validate it -m , url is-url
const minimist = require('minimist');

class Input {
    
  constructor() {
  // capturing the args
    const args = minimist(process.argv.slice(2)); // command line argu
    let action = Object.keys(args)[1];
    let note = process.argv[3];
    this.note = this.getAction(note , action) ;
  }
  getAction(note , add) {
    if (!note) {
      console.log('Error: Add a note please') ;
      return {
        action:null, payload:null,
      };
    }
    else{
      if (add === 'a' || add === 'add') {
        return {
          action:'add', payload:`Adding Note: ${note}`,
        };
        
      }
      else {
        console.log('Error: you can just use -a or --add') ;
        return {
          action:null, payload:null,
        };
      } 
    }
  }



}


module.exports = Input;

