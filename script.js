
function checkAnswer() {
  var answer = document.getElementById("answer").value.toLowerCase();
  
  if (answer === "quesito") {
    document.getElementById("question").style.display = "none";
    document.getElementById("surprise").style.display = "block";
    document.body.style.backgroundImage = "url('giphy 3.gif')";
  } else {
    alert("Sorry, that's not the correct answer. Please try again.");
  }
}
