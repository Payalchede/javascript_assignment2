var str = "Skill Safari"
//Length of the String
console.log(str.length)


//---------------------------------------------------------------------------------------------------------


var str = "Skill Safari"
//All letters in the string convert into capital letter
console.log(str.toUpperCase());


//----------------------------------------------------------------------------------------------------------

//Index position of a

console.log(str.indexOf("a"))

//captain america & Iron man Conversation

console.log(
    "\n \n \nCAPTAIN AMERICA:---Think the guy's a friendly?\n\nIRON MAN:---Doesn't matter.If he frees Loki or kills him,the Tesseract's lost.Tony turns and gets ready to jump off the jet to chase after Thor\n  \n CAPTAIN AMERICA:--- Stark,we need a plan of attack!\n\nIRON MAN:---I have a plan.Attack. IRON MAN jumps out of the jet and chases after Thor.Cap grabs a parachute to follow"
)


//--------------------------------------------------------------------------------------------------------------

//BMI CALCULATOR
function calculateBmi(){
   let weight =document.getElementById('weight').value 
   let height =document.getElementById('height').value 

   let bmi=(weight/(height*height)*703)
 document.getElementById('heading').innerHTML = 'Your BMI is : '
 document.getElementById('bmi-output').innerHTML = bmi



}

function reload(){
    window.location.reload()
}
//------------------------------------------------------------------------------------------------------------------


