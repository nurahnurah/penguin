var sget = require("sget");
var Penguins = [];



var messages = { addGender: "\n What gender is your penguin?:\n",
                
               };


 var Penguins = function( penguinsGender) {
    this.penguinsGender = penguinsGender;
    };










var mainMenu = function() {
  // wipeScreen();
  
  sleep(400);
  printMenu();
  sleep(400);


    var start = function (){
var name = sget ("\n Please enter your name: \n").trim();
userName = name;
console.log ("\nWelcome "  + userName + "!");
var nameZoo = sget ("\n Please enter the name of your penguin: \n").trim ();
penguinName = namePenguin;
console.log ("\nYour penguin name is: " + penguinName + "\n\n");
mainMenu();

};
};
