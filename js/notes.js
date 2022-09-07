const fs = require('fs')
// function header
const loadNotes = () =>{
    try{
        // array of json
        // [{"title":"note1","b":"newbody"}]
        const data = fs.readFileSync('notes.json').toString()
        // array of json --> array of object
        // [{"title":"note1","b":"newbody"}] --> [{title:"note1",b:"newbody"}]
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}
console.log(loadNotes)

const saveNotes = (data) =>{
    // array of object --> array of json
    // // [{title:"note1",b:"newbody"},{title:'note2',b:'new'}] -->
    // // [{"title":"note1","b":"newbody"},{"title":'note2',"b":'new'}]
   const savedata = JSON.stringify(data)
   fs.writeFileSync('notes.json',savedata)
   console.log(data)
}

// title --> yargs.argv.title
// body --> yargs.argv.body
// const addNote = (title,body) =>{
//     // function body
//     const notes = loadNotes() // [] // [{title:"note1",b:"newbody"}]
//     console.log(notes)
//     // [{tilte:'notee1',body:'body1'}]

//     // [{title:"note1",b:"newbody"},{title:'note2',b:'new'}]
//     notes.push({
//         title,  // title:title
//         b:body
//     })
//     console.log(notes) // [{title:'note1',b:'newbody'}]
//     saveNotes(notes)  // // [{title:"note1",b:"newbody"},{title:'note2',b:'new'}]
// }

// const addNote = (title,body) =>{
//     // function body
//     const notes = loadNotes() // [] // [{title:"note1",b:"newbody"}]
//     console.log(notes)
//     const dublicateNote = notes.find((el)=>{
//         return el.title ===title
//     })
//     console.log(dublicateNote)
//     if(!dublicateNote){
//         notes.push({
//             title,
//             body
//         })
//         saveNotes(notes)
//         console.log('saved')
//     }else{
//         console.log('note save')
//     }

//     console.log(notes)
   
// }


// const removeNote = ()=>{
//     const notes = loadNotes()
//     const keepRemoveel = notes.filter(()=>{

//     })
// }
//read
const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((el)=>{
        return el.title === title

    })
    console.log(note)
    if(note){
        console.log(note.body)
    }else{
        console.log("not note is found")
    }
}

module.exports = {
    addNote//addNote:addNote
    // removeNote
}
