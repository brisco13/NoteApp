const router = require('express').Router();
const path = require("path");
//const uuidv1 = require("uuid");

// GET Route for retrieving all the tips
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,`../../notes.html`));
  });
  
  // POST Route for a new UX/UI tip
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,`../../index.html`));
  });
  
  module.exports = router;
  
