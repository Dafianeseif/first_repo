const fs = require ('fs');
const { title } = require('process');

var fetchNotes =() => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'));
   
       } catch (err){
           return [];
   
       } 
}
var addingNote = (title ,body) => {
    var notes =fetchNotes();  
     var note = {
        title,
        body
     };
    var double = notes.filter((note) => note.title === title);
    if(double.length === 0){

        notes.push(note);

        fs.writeFileSync("notes.txt",JSON.stringify(notes));   
        logNote(note);

    }else{
        console.log("STOP: Title already exists.")
    }
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => {note.title !== title});
    fs.writeFileSync("notes.txt",JSON.stringify(filterNotes)); 

}

var readNote =(title) => {
    var notes =fetchNotes();

    var filterNotes = notes.filter((note) => note.title === title);
    logNote(filterNotes[0]);
}
var getAll = () => {
    var notes =fetchNotes();
    notes.forEach((note) => logNote(note));
        
}
var logNote = (note) =>{
    console.log("**********************");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

} 
module.exports ={
addingNote, 
removeNote,
readNote,
getAll
}



