const router = require('express').Router();
const fs = require("fs");

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
  });
  
  module.exports = router;
  
