function Game_Function() {
  var Game_Output;
  var Games = document.getElementById("Game_Input").value;
  var Game_String = " is a great game!";
  switch(Games) {
    case "World of Warcraft":
      Game_Output = "World of Warcraft" + Game_String;
      break;
    case "League of Legends":
      Game_Output = "League of Legends" + Game_String;
      break;
    case "Call of Duty":
      Game_Output = "Call of Duty" + Game_String;
      break;
    case "Grand Theft Auto":
      Game_Output = "Grand Theft Auto" + Game_String;
      break;
      default:
        Game_Output = "Please enter game exactly as written on above list.";
  }
  document.getElementById("Output").innerHTML = Game_Output;
}

//canvas hello//
function Hello_World_Function() {
  var A = document.getElementsByClassName("Click");
  A[0].innerHTML = "The text changed.";
}

  var c = document.getElementById("Canvas");
  var ctx = c.getContext("2d");
  ctx.font = "30px Arial";
  ctx.strokeText("Hello World", 10, 50);

//gradient//
  var c = document.getElementById("NotmyCanvas");
  var ctx = c.getContext("2d");
  
  var grd = ctx.createLinearGradient(0, 0, 170, 0);
  grd.addColorStop(0, "blue");
  grd.addColorStop(1, "yellow");
  
  ctx.fillStyle = grd;
  ctx.fillRect(20, 20, 150, 100);