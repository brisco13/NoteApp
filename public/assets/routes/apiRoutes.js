const router = require('express').Router();
const {writeToFile, readAndAppend, generateID, removeElement} = require('../helpers/functions.js');
const fs = require('fs');
const { response } = require('express');

// GET Route for retrieving all notes
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    fs.readFile(`db/db.json`, (err, data) => {
        let existingNotes = [];
        if (err) {console.log(err)};
        existingNotes = JSON.parse(data);
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

         //Delete Route for an existing note
 router.delete(`/notes/:id`, (req,res) => {
    //get ID to delete
    let deleteID = parseInt(req.params.id);
    console.log(`DeleteId: ${deleteID}`)
    //render db of notes
    removeElement(`db/db.json`, deleteID)
    res.send(response)
});


    module.exports = router;