function addition_Function() {
  var addition = 5 + 5;
  document.getElementById("Add").innerHTML = "5 + 5 = " + addition;
}

function subtraction_Function() {
  var subtractions = 8 - 6;
  document.getElementById("Subtract").innerHTML = "8 - 6 = " + subtractions;
}

function multiplication_Function() {
  var simple_Math = 2 * 2;
  document.getElementById("Multiply").innerHTML = "2 x 2 = " + simple_Math;
}

function division_Function() {
  var simple_Math = 72 / 2;
  document.getElementById("Divide").innerHTML = "72 / 2 = " + simple_Math;
}

function more_Math() {
  var simple_Math =( 5 + 5 ) * 20 / 10 - 10;
  document.getElementById("More").innerHTML = "5 plus 5, multiplied by 20, divided by 10 then subtracted by 10 equals" + simple_Math;
}

function modulus_Operator() {
  var simple_Math = 35 % 2;
  document.getElementById("Remainder").innerHTML = "When you divide 35 by 2 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
  var x = 12;
  document.getElementById("Negative").innerHTML = -x;
}

var Y = 6;
Y++;
document.write(Y)

document.write("<br>")

var Z = 6;
Z--;
document.write(Z)

window.alert(Math.random());

window.alert(Math.random() * 100);

document.write("<br>")

