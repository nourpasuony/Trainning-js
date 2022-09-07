// const fs = require('fs');
// //.writeFileSync code to write text in file called text.txt
// fs.writeFileSync('test.txt' , 'dsddsfdf');

// const { require } = require("yargs")

// //.tostring to return data with buffer into readable data
// // console.log(fs.readFileSync('text.txt').toString());
// console.log("aaaasass");
/*________________________________________________________ */
// 
/*________________________________________________________ */

//to run the file called app.js i will use node app.js title --title ="nour" 
/*-----------------------------------------------------*/
// const person = {
//     name:"nour",
//     age:23
// }
// let Tojson = JSON.stringify(person)
// console.log(Tojson)
// const fs = require('fs')
// fs.writeFileSync('test.json',Tojson)

// const Tobject = JSON.parse(Tojson)
// console.log(Tobject)
// Tobject.name = "ahmed";
// Tobject.age = "25";
// fs.writeFileSync('test.json',Tobject)

// console.log(fs.readFileSync('test.json').tostring())
// const Njson =  JSON.stringify(Tobject)
// fs.writeFileSync('test.json',Njson)
/*-----------------------------------------------------*/
const yargs = require('yargs')
const notes = require('./notes')
// yargs.command({
//     command:'add',
//     describe:'Add note', // comment
//     // options that command deal with 
//     builder:{
//         title:{
//             describe:'This is title description in add command',
//             type:'string',
//             demandOption:true // Obligatory
//         },
//         body:{
//             describe:'This is body description in add command',
//             type:'string',
//            demandOption:true
//         }
//     },

//     // logic that will be excuted when i call this command
//     handler:()=>{
//        // console.log(yargs.argv.title)
//         notes.addNote(yargs.argv.title,yargs.argv.body)
//     }
// })

// delete
// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     builder:{
//         title:{
//             describe:'This is title description in delete command',
//             type:'string',
//             demandOption:true
//         }
//     },
//     handler:()=>{
//           notes.remove(yargs.argv.title)
//     }
// })

// const yargs = require('yargs')
// yargs.command({
//     command:'list',
//     describe:'this is list description',
//     builder:{
//         title:{
//             descripe:'asdfff',
//             type:'string',
//             demandOption:true
//         }
//     },
//     handler:()=>{
//         console.log("dddd");
//     }

// })

// read
yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        title:{
            describe:'This is title description in read command',
            type:'string',
            demandOption:true
        }
    },
    handler:()=>{
        notes.readNote()
    }
})