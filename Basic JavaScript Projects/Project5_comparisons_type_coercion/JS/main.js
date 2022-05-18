document.write("10" + 5); //coercion emaple
document.write(typeof 5); //type of example

function my_Function() { //nan examples
  document.getElementById("Test").innerHTML = 0/0;
}

function my_Function1() {
  document.getElementById("Test1").innerHTML = 5;
}

document.write("<br>"); //infinite example
document.write("<br>");
document.write(5E25);

document.write("<br>");//-infinite example
document.write(-5E25);

document.write("<br>");//true boolean example
document.write("<br>");
document.write(20> 2);

document.write("<br>");//false boolean example
document.write("<br>");
document.write(20< 2);

console.log(3 + 3); //console.log displays 6
console.log(25< 5); //console.log displays false

document.write("<br>");
document.write("<br>");
document.write(25==25); //displays true
document.write("<br>");
document.write(3==27); //displays false

//=== sign example beginning
document.write("<br>");
document.write("<br> Same type different value <br>");
P = 7;
C = 8;
document.write(P === C);

document.write("<br> Same type same value <br>");
D = 9;
A = 9;
document.write(D === A);

document.write("<br> Different type same value <br>");
J = "9";
Date = 9;
document.write(J === Date);

document.write("<br> Different type different value <br>");
B = "0";
L = 1;
document.write(B === L);
//=== sign example end

//boolean examples
document.write("<br>Boolean example <br>");
document.write("<br> Boolean AND <br>");

document.write(17> 5 && 2<20);

document.write("<br>");
document.write(17< 5 && 2<20);
document.write("<br>");
document.write(17< 5 && 2>20);

document.write("<br> Boolean OR <br>");
document.write(20<30 || 2>30);
document.write("<br>");
document.write(20>30 || 2>30);

function not_Function() {
  document.getElementById("Not").innerHTML = !(30 > 10);
}

function not_Function1() {
  document.getElementById("Not1").innerHTML = !(30 < 10);
}
