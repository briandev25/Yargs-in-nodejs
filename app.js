// const addition = require('./utils')

// const sum = addition(56,64);
// console.log(sum);

// const text =require('./notes');

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
        console.log("Title: ",argv.title)
        console.log("Body: ",argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Removing a new note',
    handler: () =>console.log("note removed")
})
yargs.command({
    command:'list',
    describe:'Lists the contents',
    handler: () =>console.log("listed")
})
yargs.command({
    command:'read',
    describe:'reading a note',
    handler: () =>console.log("note read")
})
console.log(process.argv)
yargs.parse()