//-----------------Globals--------------------------//
var NumOfWorkouts = 7
//----------------- Index Functions----------------//
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
  var head1 = '<a href="workOutDetails.html"  title="See full details"><h4>Full body weight lifting</h4></a>';
  var head2 = '<h6>All time crusher</h6>';
  var head3 = '<p>Diffuclty level: 9</p>';
  var raters = '<div><span>(554)</span>'
  var check1 = '<span class="fa fa-star checked"></span>'
  var check2 = '<span class="fa fa-star checked"></span>'
  var check3 = '<span class="fa fa-star checked"></span>'
  var check4 = '<span class="fa fa-star checked"></span>'
  var check5 = '<span class="fa fa-star"></span>'
  var score = '<span >4</span>'
  var close = '</div></div>';

  for (var i = 0; i < NumOfWorkouts; i++) {
    cards += head + head1 + head2 + head3 + raters + check1 + check2 + check3 + check4 + check5 + score + close;
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


    var starHead = '<div class="rate">';
    var star5 = ' <input type="radio" id="star5" name="rate" value="5" /><label for="star5">5 stars</label>';
    var star4 = '<input type="radio" id="star4" name="rate" value="4" /><label for="star4">4 stars</label>';
    var star3 = ' <input type="radio" id="star3" name="rate" value="3" /><label for="star3" >3 stars</label>';
    var star2 = '<input type="radio" id="star2" name="rate" value="2" /><label for="star2" >2 stars</label>';
    var star1 = '<input type="radio" id="star1" name="rate" value="1" /><label for="star1" >1 star</label>';
    var starclose = '</div>';

    var rate = document.getElementById("rating");
    rate.innerHTML = '<h4 >Rate this Workout</h4>' + starHead + star5 + star4 + star3 + star2 + star1 + starclose;
  }())
}


//---------------------------Workout form Trainer---------------//

var numOfClicks = 0;
var original = document.getElementById("duplicator");
if (original != null)
  var clones = [original];

$(".addNewEx").click(function () {

  var clone = original.cloneNode(true);
  clone.childNodes[9].childNodes[1].value = "";
  clone.id = "duplicator" + ++numOfClicks;
  var txt = '<h6>Ex' + (numOfClicks + 1) + '</h6>';
  clone.childNodes[1].innerHTML = txt;
  clones.push(clone);
  original.parentNode.appendChild(clone);
})

$(".removeEx").click(function () {
  if (numOfClicks != 0) {
    original.parentNode.removeChild(clones[numOfClicks])
    clones.pop();
    numOfClicks--;
  }
})
