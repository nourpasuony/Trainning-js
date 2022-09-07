
//  let element = document.createElement('div');
//  element.innerHTML = "nour";
//  element.className = "new ele";
//  element.setAttribute("style" , "color:red;");
//  element.textContent = "asdggg";
//  element.style.color = "red";
// let test = document.getElementsByClassName(".new ele");
// document.body.appendChild(element);
// document.body.removeChild("test");
// console.log(document.images);

/*____________________________________________________*/
/*take grade from the user and print her grid in the body */ 
/*let element = document.createElement('p');

element.className = "UserDetails";
document.body.appendChild(element);
let UserName = prompt("pleace,Enter your Name :");
let UserGrade =parseInt(prompt("pleace,Enter your Grade:"));
if (UserGrade <= 100 || UserGrade >=90){
    element.innerText = "hello, " + UserName +" "+ "you have a"
}else if (UserGrade <= 90 || UserGrade >=85){
    element.innerText = "hello, " + UserName +" "+ "you are B"
}else if (UserGrade <= 85 || UserGrade >=70){
    element.innerText = "hello, " + UserName +" "+ "you are C"
}if (UserGrade <= 70 || UserGrade >=60){
    element.innerText = "hello, " + UserName +" "+ "you are D"
}else {
    element.innerText = "hello, " + UserName +" "+ "you are failer"
}*/
/*____________________________________________________*/
/*print all element in the array (dynamically)*/

/*let Fruits =['Apple' , 'Orange','Grapes']
for (i=0 ; i<=Fruits.length-1;i++){
    console.log(Fruits[i]);
}*/

/*____________________________________________________*/
/*use forEach to [1]print total of element in key degree
[2]print the name value in all opject*/

/*let students = [
    {
        name:'Omar',
        age:15,
        degree:[18, 20 ,9]
    },
    {
        name:'Osama',
        age:17,
        degree:[11, 10 ,7]
    },
    {
        name:'zaid',
        age:17,
        degree:[8, 2 ,19]
    },
]
students.forEach((ele) =>{
    console.log(ele.name);
    let total = 0;
    ele.degree.forEach((el)=>{
        total += el;
    });
    console.log(total);
    
})*/
/*____________________________________________________*/
/*settimeout is asycronos mean that line code will cooperate with line execute  */
// console.log("nour");
// setTimeout(()=>console.log("ahmed"),2000);
// console.log("alaa");
/*____________________________________________________*/
/*let mypromise = new Promise((resolve,reject)=>{
    if(3>2){
       resolve("data")
    }
    reject("error")
})
mypromise.then().catch()*/
/*____________________________________________________*/
/*let fetchusers = async () => {
    try{
        //return promise 
        // the await function use to wait in the line else the data will fetch
        const rec = await fetch("https://jsonplaceholder.typicode.com/users")
        //return promise
        const data = await rec.json() //.json use to return date type with json into object
        console.log(data)
    }
    catch(e){
        alert(e)
    }
}

fetchusers()*/
//this up code can write with .then().catch() also
/*____________________________________________________*/