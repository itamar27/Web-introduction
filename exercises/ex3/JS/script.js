var sizeName = 18;


 var createBox = function(){

    var arr = "";
    for(var i = 0; i < sizeName; i ++)
    {
        
        arr += "<article></article>";
    }

    return arr;
};



var cont =  document.getElementsByClassName("container")[0];
cont.innerHTML = createBox();
var first = cont.firstElementChild;


first.onmouseover = function(){
    first.style.backgroundImage = "url(images/Itamar.png)";
}

first.onmouseout = function(){
    first.style.backgroundImage = null;
}

function on(){
    for(var i = 0; i < 6; i++)
        cont.getElementsByTagName("article")[i].style.backgroundColor = "black";
}

function off(){
    for(var i = 0; i < 6; i++)
        cont.getElementsByTagName("article")[i].style.background = "none";
}

