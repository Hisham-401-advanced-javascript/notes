'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
const NotesCollection = require('./notes-schema');


/**
     * Implementing CRUD operations for mongoose methods (from the notes schema)
     * * all() --> mongoose.find() method
     * * add() --> mongoose.save() method
     * * delete() --> mongoose.findByIdAndDelete() method
     */