const router = require('express').Router();
const fs = require("fs");
//const uuidv1 = require("uuid");

// GET Route for retrieving all the tips
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
  });
  
  // POST Route for a new UX/UI tip
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
    console.log(req.body);
  });
  
  module.exports = router;
  
