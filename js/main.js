/* accordion for mobile site - about.html */
var accordion = document.getElementsByClassName("accordion");
var i;
for (i=0; i<accordion.length; i++){
    accordion[i].onclick=function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}