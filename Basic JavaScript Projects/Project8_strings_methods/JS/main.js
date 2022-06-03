//Concat method//

function full_Sentence() {
  var part_1 = "I have";
  var part_2 = " made this ";
  var part_3 = " into a complete ";
  var part_4 = "sentence.";
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice method//
function slice_Method() {
  var Sentence = "All work and no play makes Shae a dull girl.";
  var Section = Sentence.slice(27,31); //numbers indicate which characters in your string will be cut out and displayed.//
  document.getElementById("Slice").innerHTML = Section;
}


//upper_Method//
function upper_Method() {
let text = "Shae is pretty.";
let result = text.toUpperCase();
document.getElementById("Upper").innerHTML = result;
}

//to string method//
function string_Method() {
  var X =183;
  document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//precision method//
function precision_Method() {
  var Y = 12938.301297965433;
  document.getElementById("Precision").innerHTML = Y.toPrecision(9);
}