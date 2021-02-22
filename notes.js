const fs = require('fs');
const getNotes =() =>"Your notes..."

const addNotes =(title,body) =>{
     const notes = loadNotes()
   notes.push({
       title : title,
       body:body
   })
   saveNotes(notes)
}
const saveNotes =(notes)=>{
  const dataJSON =JSON.stringify(notes);
   fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes =()=>{
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const notesJSON = dataBuffer.toString();
    return JSON.parse(notesJSON) 
    }catch(e){
        return []
    }
}
const removeNote =(title)=>{
    const notes =loadNotes();

    const notesToKeep = notes.filter((note) =>{
        return note.title !== title
    });
    saveNotes(notesToKeep)
}
const listNotes = ()=>{
    const notes = loadNotes();

    notes.forEach(note =>{
        console.log(note.title)
    })

}
const readNote =(titleSearch)=>{
     const notes = loadNotes();

     const searchTitle = notes.find(note =>{
         return note.title === titleSearch
              })
     
   if(searchTitle===undefined){
       return "Data not found"
   }else{
    return searchTitle.body
   }
}
module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
} 