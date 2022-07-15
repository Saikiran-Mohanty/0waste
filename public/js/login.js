
var fname= document.getElementsByName("name").values;
var email= document.getElementsByName("email").values;
var log=document.getElementsByClassName("log")

if(email.length!=0 || fname.length!=0){
 log.style.display = none;

 console.log(fname)
}