const router = require('express').Router();
const {readFromFile, readAndAppend, generateID} = require('../helpers/functions.js');
const fs = require('fs');

// GET Route for retrieving all notes
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    fs.readFile(`db/db.json`, (err, data) => {
        let existingNotes = [];
        if (err) {console.log(err)};

        existingNotes = JSON.parse(data);
        console.log(existingNotes);
        res.send(existingNotes);
    })
  });
  
  // POST Route for a new note
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
    const {title, text} = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: generateID()
        }
        console.log(newNote)
        readAndAppend(newNote, `db/db.json`)
        
        const response = {
            status: 'success',
            body: newNote,
          };
      
          res.json(response);
        } else {
          res.json('Error in posting note');
        }
    })
