//this and new keywords start//
function About(Food, Music, Hobby, Color) {
  this.About_Food = Food;
  this.About_Music = Music;
  this.About_Hobby = Hobby;
  this.About_Color = Color; 
}
var Bob = new About("Burgers","Rock","Cooking","Red");
var Linda = new About("Chocolate","Pop", "Singing","Yellow");
var Tina = new About("Candy","Musicals", "Looking at boys and unicorns", "Blue");
function myFunction() {
  document.getElementById("New_and_This").innerHTML =
  "Tina Belcher likes " + Tina.About_Color + " and " + Tina.About_Music + 
  " her hobbies include " + Tina.About_Hobby + ".";
}