var slideIndex = 1;
var modal = 0;
showDivs(slideIndex, modal);

function plusDivs(n,m) {
    showDivs(slideIndex += n,m);
}

function resetDivs(){
  slideIndex = 1;

}

function showDivs(n , m) {
    var i;
    var y = document.getElementsByClassName("modal"+m);
    var x = document.getElementsByClassName("mySlides");
    if (n > y.length) {slideIndex = 1}
    if (n < 1) {slideIndex = y.length} ;
    for (i = 0; i < y.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
