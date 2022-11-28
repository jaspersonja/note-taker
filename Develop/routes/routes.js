const fs = require('fs');
const path = require('path');

module.exports = app => {

fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) throw err;

    let note = JSON.parse(data);
//api get and post routes
    app.get('/api/notes', function (req, res) {
        res.json(note);
    })
    app.post('/api/notes', function (req, res) {
        let addNote = req.body
        note.push(addNote)
        addtoDB();
    })
//display notes
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/assets/notes.html'))
    })

//add to json file when a note is input
    function addtoDB() {
        fs.writeFile('db/db.json', JSON.stringify(note, '/t'), err => {
            if (err) throw err;
            return true;
        })
        
    }

})

}