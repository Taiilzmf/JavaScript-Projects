function Ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = (Height < 52) ? "You're are too short" : "You're are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//this and new keywords start//
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color; 
}
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep","Trail Hawk", 2019,"White and Black");
var Erik = new Vehicle("Ford","Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
  "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
  " manufactured in " + Erik.Vehicle_Year;
}
//this and new end//


//nested example//
function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();
  function Count() {
    var Starting_point = 25;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
  }
}

