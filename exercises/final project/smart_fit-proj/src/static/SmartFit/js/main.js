//-----------------Globals--------------------------//
var NumOfWorkouts = 7
//----------------- Index Functions----------------//
$('#newworkout').click(function () {
  window.location = '/workouts/new';
});

$('#showmore').click(function () {
  window.location = '/workouts/';
});



//---------------------------Workout form Trainer---------------//

var numOfClicks = 0;
var original = document.getElementById("duplicator");
if (original != null)
  var clones = [original];


$(".addNewEx").click(function () {
  if (numOfClicks < 2) {
    var clone = original.cloneNode(true);
    clone.childNodes[9].childNodes[1].value = "";
    clone.childNodes[3].childNodes[1].name = "ex_"+(numOfClicks + 2)+"_name";
    clone.childNodes[5].childNodes[1].name = "ex_"+(numOfClicks + 2)+"_sets";
    clone.childNodes[7].childNodes[1].name = "ex_"+(numOfClicks + 2)+"_reps";
    clone.childNodes[9].childNodes[1].name = "ex_"+(numOfClicks + 2)+"_desc";
    clone.id = "duplicator" + ++numOfClicks;
    var txt = '<h6>Ex' + (numOfClicks + 1) + '</h6>';
    clone.childNodes[1].innerHTML = txt;
    clones.push(clone);
    original.parentNode.appendChild(clone);
  }
})



$(".removeEx").click(function () {
  if (numOfClicks != 0) {
    original.parentNode.removeChild(clones[numOfClicks])
    clones.pop();
    numOfClicks--;
  }
})


//------------------------------AJAX------------------------------//
const $exList = $(".exercises-list");
if ($exList.length > 0) {
  $.getJSON("/workouts/exercises", function(data) {
    $.each(data, function(key, item) {
      $exList.append(
        $(`<option value=${item.name}>${item.name}</option>`)
      )
    });
  });
}


