'use strict';

const Input = require('../lib/input.js');
let myInputs = new Input();


describe('Input Module', ()=> {
    
  it('getAdd() vaild case for payload', ()=> {
    expect(myInputs.getAdd('hi' , 'add').payload).toEqual('Adding Note: hi');
  });

  it('getAdd() vaild case for action', ()=> {
    expect(myInputs.getAdd('hi' , 'add').action).toEqual('add');
  });
  it('getAdd() defaults to ERROR when there is no values', ()=> {
    expect(myInputs.getAdd('hi' , 'add').payload).toEqual('Adding Note: Error: you can just use -a or --add');
  });
});