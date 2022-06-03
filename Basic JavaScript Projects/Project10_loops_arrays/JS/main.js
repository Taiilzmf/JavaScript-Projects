//loop count to 10//
function Call_Loop() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Loop").innerHTML = Digit;
}

//for loop//
var Colors = ["black", "white", "Blue", "Green", "Yellow"];
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Colors.length; Y++) {
    Content += Colors[Y] + "<br>" ;
  }
  document.getElementById("List_of_Colors").innerHTML = Content;
}

//array assignment//
function Favs() {
  var Favorite = [];
  Favorite[0] = "Korean BBQ";
  Favorite[1] = "Sushi";
  Favorite[2] = "Soul Food";
  Favorite[3] = "Italian";
  document.getElementById("Favorites").innerHTML = "Shae's favorite food is " + 
  Favorite[2] + ".";
}

function constant_function() {
  const Instrument = {type:"guitar", brand:"Fender", color:"black"};
  Instrument.color = "blue";
  Instrument.price = "$900";
  document.getElementById("Constant").innerHTML = "The cost of the " +
  Instrument.type + " was " + Instrument.price;
}

//let keyword function code wont run due to defer //
var A = 5;
document.write(A);
{ 
  let A = 10;
  document.write("<br>" + A);
}
document.write("<br>" + A);

//Example object with properties and methods also working let example//
let car = {
  make: "Dodge",
  model: "Viper",
  year: "2021",
  color: "red",
  description: function() {
    return "The car is a " + this.year + " " + this.color + " " + this.make + " "  + this.model + "." ;
  }
};
document.getElementById("Car_Object").innerHTML = car.description();
