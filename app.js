// const addition = require('./utils')

// const sum = addition(56,64);
// console.log(sum);

 const notes =require('./notes.js');

// console.log(text())

// const validator  =require('validator')

// console.log(validator.isEmail('briankips@gmail.com'))

const chalk = require('chalk');
//const { argv } = require('yargs');

const yargs = require('yargs')
 
//create add command
yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
              
        }
    },
    handler: (argv) =>{
      notes.addNotes(argv.title,argv.body)  
    }
})
yargs.command({
    command:'remove',
    describe:'Removing a new note',
    builder:{
        title:{
              describe:"note title",
              demandOption:true,
              type:'string'
        }
    },
    handler: (argv) =>{
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'Lists the contents',
    handler: () =>{
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'reading a list',
    builder:{
        title:{
              describe:"note title",
              demandOption:true,
              type:'string'
       
            }
        },
    handler: (argv) =>{
        console.log(notes.readNote(argv.title))
    }

})
console.log(process.argv)
yargs.parse()