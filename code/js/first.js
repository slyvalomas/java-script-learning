//GRAY COURES SEMMES REALLY BAD I DID SEE THAT ITS AN OLD COURES(HE WASNT THAT GOOD AT TEACHING SO I DID GO BACK TO FREECODECAMP GUY AND HES GOOD TO BE HONEST)


//! str 1st lesson
const variable="i need to chill"

console.log("machaaal dont leave me here!".length);

console.log(variable.charAt(1));

console.log(variable.lastIndexOf("brahim"));

console.log(variable.slice(7,));

console.log(variable.slice(0,6).toUpperCase());

console.log(variable.split(" "))
console.log("maichaaal help me".split(" "));

//! numbers
const number_float=19.25;
const number_str="19";
const number_int=19
console.log(number_str);
console.log(number_int);
console.log(number_float);
console.log(number_int===number_str)
console.log(number_int===Number(number_str))
console.log(number_int+ Number(number_str))
console.log(String(number_int)===number_str)
console.log(Number.isInteger(number_str))
console.log(Number.isInteger(Number(number_str)))
//! math
console.log(Math.E) 
console.log(Math.LNE)//should be 1 ?? ln(e)=1 e**ln=1
console.log(Math.LN10)
console.log(Math.trunc(Math.E))
console.log(Math.round(Math.E ))
console.log(Math.ceil(Math.E))
console.log(Math.floor(Math.E))
console.log(Math.pow(2,4))
console.log(2**4)
console.log(Math.min(5,7,82,8,17,5,1,8,2,75,48,))
console.log(Math.max(55,74,22,85,1,2,51,851,521,81,48,2,55,82,))
console.log(Math.abs(554,8,85,8,2,8555))
console.log(Math.random())
console.log(Math.random())

console.log(Math.floor(Math.random()*10)+1)
console.log(Math.floor(Math.random()*100)+1)
//! first challenge
//1
const name1 ="brahim abdelmoumen"
console.log(name1.charAt((Math.floor(Math.random()*17)),))
//2
console.log(name1.charAt(Math.floor(Math.random()*name1.length)))

let name2= "brahim";
let hi;
let ban = false
let chrack=false
if(ban){
    hi="go away"
}   else if (name2 && chrack) {
    hi="hi " +name2
}  else if (name2) {
    hi="hi mr " +name2 
}     else{
    hi="hello you"
}

let h2;
let ban1 = true

if(ban1){
    h2="go away"
}   else if (name2 && chrack) {
    h2="hi " +name2
}  else if (name2) {
    h2="hi mr " +name2 
}     else{
    h2="hello you"
}

let h3;
let ban2 = false
let chrack1=true
if(ban2){
    h3="go away"
}   else if (name2 && chrack1) {
    h3="hi " +name2
}  else if (name2) {
    h3="hi mr " +name2 
}     else{
    h3="hello you"
}

console.log(hi)
console.log(h2)
console.log(h3)

let cdf_codding=20;
let fall;
if (cdf_codding>=360){
    fall="yes keep going "
    
}
    else if (cdf_codding<360){
        fall="you need more"
    }
console.log(fall)
let points=14.58;
let grade;
let college=true;
if (points>=16){
    grade='très bien'
}
else if (points>=14){
    grade='bien'
}
else if (points>=12){
    grade='assez bien'
}
else if (points>=10){
    grade='acceptables'
    if (college){
        grade='Échoué'
    }
}
else if (points<10){
    grade='Échoué'
}
console.log(grade)
let me = "sizer";
let computer = "sizer" ;
if (me === computer){
    the_hype_guy="ohhhhhhhhh remontada khayalya ta3adol"
}else if (me==="rock"){
    if (computer==="rock"){
        the_hype_guy="ohhhhhhhhh remontada khayalya ta3adol"
    }
    else if (computer==="sizer"){
        the_hype_guy="ohhhhhhhhh remontada khayalya brahim win"
    }
    else if (computer==="paper"){
        the_hype_guy="ohhhhhhhhh remontada khayalya pc win"
    }
}else if (me==="sizer"){
    if (computer==="rock"){
        the_hype_guy="ohhhhhhhhh remontada khayalya pc win"
    }
    else if (computer==="sizer"){
        the_hype_guy="ohhhhhhhhh remontada khayalya ta3adol"
    }
    else if (computer==="paper"){
        the_hype_guy="ohhhhhhhhh remontada khayalya brahim win"
    }
}else if (me==="paper"){
    if (computer==="rock"){
        the_hype_guy="ohhhhhhhhh remontada khayalya brahim win"
    }
    else if (computer==="sizer"){
        the_hype_guy="ohhhhhhhhh remontada khayalya pc win"
    }
    else if (computer==="paper"){
        the_hype_guy="ohhhhhhhhh remontada khayalya ta3adol"
    }
}
console.log(the_hype_guy)
switch (Math.floor(Math.random()*4+1)) {
    case 1:
        console.log("there is a football today match sir")
        break;
    case 2:
        console.log("there is 2  football match today sir")
        break;
    case 3:
        console.log("there is 3 football match today  sir")
        break;

    default:
        console.log(" im sorry we didn't understand sir")
}
let me ="paper"
let computer="rock"

switch (me) {
    case  computer :
        console.log("ta3adol");

        break;
    case "rock":
        if (computer === "paper") {
        console.log("pc win");
        } else {
            console.log("you win")
        }
        break;      
    case "paper":
        if (computer =="sizer"){
        console.log("pc win")
        }        
        else {
            console.log("you win")}
        break;
    case "sizer":
        if (computer === "rock"){
        console.log("pc win")
        }        
        else {
            console.log("you win")}
        break;
}
let brahimIsAStudent=false
let brahim=true;
let replay = brahim ?"so you are moroccan  right  !!!!! " : "i know you are a moroccan!!" 
let school =  brahimIsAStudent ? "so you are a student":"you're nit a student"
console.log(replay , school)
let control = 15
let grade = control>=18 ?"let him cook!" :
 control>=16 ? "nice grade buddy" :
  control>=14?"nice boy" :
  control>=12 ?"bien":
    control>=10 ? "you good":
    "go back you are bad"
console.log(grade)
let pc="sizer";
let me="paper";
let results = pc===me ? "ta3adol"
:me="rock" && pc ==="sizer" ? "lose"
:me="rock" && pc ==="paper" ? "win"
:me="paper" && pc ==="sizer" ? "lose"
:me="paper" && pc ==="rock" ? "win"
:me="sizer" && pc ==="paper" ? "win"
:me="sizer" && pc ==="rock" ? "lose":"please type rock paper or sizer"
console.log(results)
let brahiam =confirm("ok===true\n cancel === false");
console.log(brahiam)
let name = prompt("pleas inter your name")
console.log(name??);

















