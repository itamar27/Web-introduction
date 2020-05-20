$('#workoutBtn').click(function () {
  window.location = './form.html';
});


//------------------------form elemnt-----------------------------



//----------------------------workout cards trainee----------------------

(function initializeCards() {
  var cards = "";
  for (var i = 0; i < 6; i++) {
      cards += ' <div class="card text-center workoutList"><h2>Workout in action:</h2><h5>25 participants in yoga class</h5><p>Some text..</p><p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco.</p></div>';
  }
  var main = document.getElementsByClassName("workoutcards")[0];
  main.innerHTML = cards;
}())
