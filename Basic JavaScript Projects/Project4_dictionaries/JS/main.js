function marzett_Family() { // Dictionary containing my family
  var Family = {
    Jo: "Dad",
    Shae: "Mom",
    Kai: "Son",
    Naia: "Daughter", 
    Taj: "Son",
    Noloa: "Son"
  };
delete Family.Shae; // deletes shae from family
document.getElementById("Family").innerHTML = Family.Jo;
}