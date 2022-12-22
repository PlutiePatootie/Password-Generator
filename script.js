// Assignment code here
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var specialChar = ["£","$","&","()","*","+","[]","@","#","^","-","_","!","?"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var pikachu = [];
var numberOfCharacters;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword(){ 
console.log("you clicked the button");



  getUserInput();
var password;
  
   


  function getUserInput(){
     numberOfCharacters = window.prompt ("select number of characters for password");
  if (numberOfCharacters < 8 || numberOfCharacters >= 128){
    window.alert("password must be between 8 and 128 characters");
    return
     }
  
  var chosenNumbers = window.confirm("would you like numbers in your password?");
  if(chosenNumbers == true){
   pikachu = pikachu.concat(numbers);
}
var chosenChar = window.confirm("would you like symbols in you password");
if(chosenChar == true){
  pikachu = pikachu.concat(specialChar);
}

var chosenUpperCase = window.confirm("would you like uppercase letters in your password");
if(chosenUpperCase == true){
  pikachu = pikachu.concat(upperCase);
}

var chosenLowerCase = window.confirm("would you like lowercase letter in your password");
if(chosenLowerCase == true){
  pikachu = pikachu.concat(lowerCase);
    } 
    console.log(pikachu)
}
for(var i=0;i <numberOfCharacters; i++){
  var random = Math.floor(Math.random() * pikachu.length)

  if(password == undefined){
    password = pikachu[random]} else{
  password = password.concat(pikachu[random]);
  }
}
  return password;
}
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //return Math.floor(Math.random() * pikachu.length );// 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

for(var i=0;i <numberOfCharacters; i++){
  var random = math.floor(Math.random() * pikachu.length)

}