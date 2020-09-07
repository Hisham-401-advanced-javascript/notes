'use strict'; 

// capturing the input args. (minimist) + Validate it -m , url is-url
const minimist = require('minimist');

class Input {
    
  constructor() {
  // capturing the args
    const args = minimist(process.argv.slice(2)); // command line argu
    let add = Object.keys(args)[1];
    let note = process.argv[3];
    this.note = this.getAdd(note , add) ;
  }

  getAdd(note , add) {
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




// 'use strict';

// // Third party libraries to help - Minimist wants an array of strings with specific structural requirements
// const minimist = require('minimist');

// function Input() {
  
//     // console.log(args);
//     let note = process.argv[3];

//     const args = minimist(process.argv.slice(2));

//     let add = Object.keys(args)[1];

// this.action = this.getAdd(add);
// this.payload = this.getNote(note);
// }
  
// Input.prototype.getAdd = function (action) {
//   if (action === 'add' || action === 'a') {
//     // console.log(action);
//     return action ;
//   }
//   else {
//     // console.log('Enter a valid action');
//   }
// };
  
// Input.prototype.getNote = function (payload) {

//   if(payload){
//     return payload;
//   }
//   else{
//     return 'Error: invalid note'
//   }
// };

// module.exports = Input;