let myAge=17;
let isOfAge=false;
if(myAge>18){
    isOfAge=true;
}
else{
    isOfAge=false;
}
isOfAge = myAge > 18? true : false


let color = "green"
let isCorrect = false

color = isCorrect && "green";
console.log(color);

const fetchData = async() =>{
    const data = await fetch("imaginaryapi.com/searchTerm=$");
    const name = data.person?.name;
}