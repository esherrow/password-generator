// Assignment Code
var generateBtn = document.querySelector("#generate");
var psword = [];
var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbols = [' ', '!', '"', '#', '$', '%', '&',"'", '('];

function generatePassword(pswdLength) { 
  var useNumber = window.prompt("Would you like to use digits 0-9?");
  var useLower = window.prompt("Would you like to use lowercase letters a - z?");
  var useUpper = window.prompt("Would you like to use uppercase letters A - z?");
  var useSpec = window.prompt("Would you like to use special characters?");
  
  for (var i = 0; i < pswdLength; i++) {
    var use = Math.floor(Math.random()*4);
    var letterOpt = Math.floor(Math.random()*letters.length);
    console.log(i);  
    if (use === 0 && useNumber == true){
      psword.push(Math.floor(Math.random()*10));}
    else if (use === 1){//} && useUpper == true){
      psword.push(letters[letterOpt]);}
    else if (use === 2){//} && useLower == true){
      var lowerCase = letters[letterOpt].toLowerCase();
      psword.push(lowerCase);}
    else if (use === 3){//} && useSpec == true){
      var special = Math.floor(Math.random()*symbols.length);
      psword.push(symbols[special]);};
    //else{
      //i--;
    //};   
    
  };
 return psword.join(''); 
};
// Write password to the #password input
function writePassword() {

  while (pswdLength == null || pswdLength < 8 || pswdLength >128) {
    var pswdLength = window.prompt('Please choose a number between 8 and 128 for your password length');
    if (pswdLength < 8 || pswdLength > 128){
      window.alert('You have choosen an invalid length');
    }
  };

  
    

  var password = generatePassword(pswdLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
