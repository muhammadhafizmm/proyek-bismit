var btn = document.querySelector("#upBtn");
btn.addEventListener("click",function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

var x = document.getElementsByClassName('pop-up');
var y = document.getElementsByClassName('model');
var z = document.getElementsByClassName('select');
var slideIndex;

function exitBtn(n) {
x[n-1].style.display = "none";
for (var i = (3*(n-1)); i < ((3*n)); i++){
	y[i].className = y[i].className.replace(' aktif', '');
	z[i].className = z[i].className.replace(' nyala', '');
}
slideIndex = 0;
}

function pop(n){
x[n-1].style.display = "block";
for (var i = (3*(n-1)); i < ((3*n)); i++) {
	y[i].className += ' aktif'
	y[i].style.transition = "all .3s";
	z[i].className += ' nyala'
	z[i].style.transition = "all .3s";
}
slideIndex = 1;
select(slideIndex);

}

function slide(n){
select(slideIndex = n);
}

function select(n){
var i;
var gambar = document.getElementsByClassName('aktif');
var selec = document.getElementsByClassName('nyala');
for (i = 0; i < gambar.length; i++){
	gambar[i].style.display = "none";
}
for (i = 0; i < selec.length; i++){
	selec[i].className = selec[i].className.replace(" klik", "");
}
gambar[(slideIndex)-1].style.display = "block";
selec[(slideIndex)-1].className += " klik";
}

// script js for hover
var hov = document.getElementsByClassName('hover')
function mouseover(n){
	for (var i = 0; i > hov.length; i++) {
  		hov[i].style.display = "none"
	}
	hov[n-1].style.display = "flex"
}

function mouseout(n){
	hov[n-1].style.display = "none"
}
