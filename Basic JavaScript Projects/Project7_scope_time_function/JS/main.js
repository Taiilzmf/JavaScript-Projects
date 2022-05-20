//Global variable//

var Z = 72;
function Subtract_numbers_1() {
  document.write(100 - Z + "<br>");
}
function Subtract_numbers_2() {
  document.write(Z - 30 + "<br>");
}
Subtract_numbers_1();
Subtract_numbers_2();

//Local variable//
function Add_numbers_3() {
  var A =  20;
  document.write(50 + A + "<br>")
}
function Add_numbers_4() {
  document.write(A + 500 + "<br>");
  console.log(A + 500);
}
Add_numbers_3();
Add_numbers_4();

//if statements//
function get_Date() {
  if(new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
  }
}

function get_Date1() {
  if(new Date().getHours() < 12) {
    document.getElementById("Test").innerHTML = "Hi Shae!";
  }
}
// if and else//
function Age_Function() {
  Age = document.getElementById("Age").value;
  if(Age >= 18) {
    Vote = "You are old enough to vote!";
  }
  else {
    Vote = "You are not old enough to vote!";
  }
  document.getElementById("How_old_are_you?").innerHTML = Vote;

}

//if else statements//
function Time_function(){
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0){
    Reply = "It is morning.";
  }
  else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon.";
  }
  else {
    Reply = "It is evening.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}
