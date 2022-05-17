function addition_Function() { //addition function
  var addition = 5 + 5;
  document.getElementById("Add").innerHTML = "5 + 5 = " + addition;
}

function subtraction_Function() { //subtraction function
  var subtractions = 8 - 6;
  document.getElementById("Subtract").innerHTML = "8 - 6 = " + subtractions;
}

function multiplication_Function() { // multiplication function
  var simple_Math = 2 * 2;
  document.getElementById("Multiply").innerHTML = "2 x 2 = " + simple_Math;
}

function division_Function() { // division function
  var simple_Math = 72 / 2;
  document.getElementById("Divide").innerHTML = "72 / 2 = " + simple_Math;
}

function more_Math() { //Multiple math functions on the same line
  var simple_Math =( 5 + 5 ) * 20 / 10 - 10;
  document.getElementById("More").innerHTML = "5 plus 5, multiplied by 20, divided by 10 then subtracted by 10 equals" + simple_Math;
}

function modulus_Operator() { // returns remainder
  var simple_Math = 35 % 2;
  document.getElementById("Remainder").innerHTML = "When you divide 35 by 2 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //returns negative numbers
  var x = 12;
  document.getElementById("Negative").innerHTML = -x;
}

var Y = 6; // shows next increment number
Y++;
document.write(Y)

document.write("<br>")

var Z = 6; // shows next increment number down
Z--;
document.write(Z)

window.alert(Math.random()); //alert with random number 0-1

window.alert(Math.random() * 100); //alert with random number 0-100

document.write("<br>")

