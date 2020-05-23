var NumOfWorkouts = 7

$('#workoutBtn').click(function () {
  window.location = './form.html';
});

//----------------------------workout card listTrainee----------------------
var main = document.getElementsByClassName("workoutcards")[0];
if (main != null)
  main.innerHTML = initializeCards();

function initializeCards() {
  var cards = [];
  var head = '<div class="card text-center workoutList allBox">';
  var head1 = '<a href="workoutDetails.html" class="link" title="See full details"><h4 >Full body weight lifting</h4></a>';
  var head2 = '<h6>All time crusher</h6>';
  var head3 = '<p>Diffuclty level: 9</p>'
  var close = '</div>';
  for (var i = 0; i < NumOfWorkouts; i++) {
    cards += head + head1 + head2 + head3 + close;
  }
  return cards;
}

//----------------------------workout details trainee----------------------
var x = $("#woDetails").length;
if (x == 1) {
  (function traineeWorkOutCards() {
    var txt2 = '<p >All time crusher fullbody for serious trainees with base knowladge in swinging KB, and Bar</p>';
    var txt3 = '<p> 6</p>';

    $("#General").append(txt2);
    $("#Difficulty").append(txt3);



    var card1 = '<div class="cardWO allBox text-center"></div>'
    for (var i = 0; i < 6; i++)
      $(".cardEx").append(card1);

    var ex = 'Ex';
    var device = ['Bench press', 'Dumbell', 'KB swing', 'Squat-Bar', 'Deadlift', 'Pull-Ups'];
    var sets = ['3', '2', '4', '3', '2', '4'];
    var reps = ['10-12', '6-8', '12-14', '6-8', '6-8', '12-14'];
    var descrepition = ['hard hard', 'hard hard', 'hard hard', 'hard hard', 'hard hard', 'hard hard'];

    var cardEx = document.getElementsByClassName("cardWO");

    for (var i = 0; i < 6; i++) {
      cardEx[i].innerHTML = '<h3>Ex' + (i + 1) + "</h3>";
      cardEx[i].innerHTML += "<p>" + device[i] + "</p>";
      cardEx[i].innerHTML += "<p>" + sets[i] + "</p>";
      cardEx[i].innerHTML += "<p>" + reps[i] + "</p>";
      cardEx[i].innerHTML += "<p>" + descrepition[i] + "</p>";

    }

  }())
}


//---------------------------Workout form Trainer---------------//

var numOfClicks = 0;
var original = document.getElementById("duplicator");
if (original != null)
  var clones = [original];

$(".addNewEx").click(function () {


  var clone = original.cloneNode(true);
  clone.childNodes[9].childNodes[1].value ="";
  clone.id = "duplicator" + ++numOfClicks;
  var txt = '<h6>Ex' + (numOfClicks + 1) + '</h6>';
  clone.childNodes[1].innerHTML = txt;
  clones.push(clone);
  original.parentNode.appendChild(clone);
});

$(".removeEx").click(function () {
  if (numOfClicks != 0) {
    original.parentNode.removeChild(clones[numOfClicks])
    clones.pop();
    numOfClicks--;
  }
})
