const fs = require('fs');

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

function generateID () {
    return Date.now();
}

function removeElement (file, ID) {
        //render db of notes
        let notesList = [];
        fs.readFile(file, (err, data) => {
            if (err) {console.log(err)};
            notesList = JSON.parse(data);
            let newNotesList = notesList.filter(note=>{return note.id !== ID})
            writeToFile(file,newNotesList);
        })
}

module.exports = { writeToFile, readAndAppend, generateID, removeElement };
