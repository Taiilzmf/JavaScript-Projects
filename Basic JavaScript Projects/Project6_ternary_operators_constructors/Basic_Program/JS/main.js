function Vote_Function() {
  var Age, Can_vote;
  Age = document.getElementById("Age").value;
  Can_vote = (Age < 18) ? "You're not allowed" : "You're allowed";
  document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

