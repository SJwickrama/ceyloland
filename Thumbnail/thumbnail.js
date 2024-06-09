function color() {
	var color = document.getElementById("colors").value;
	document.body.style.backgroundColor = color;
}

function updateFontSize() {
	var updateFontSize = document.getElementById("fontsize").value;
	let updateHeadingFontSize = document.getElementById("heading");
	document.body.style.fontSize = updateFontSize;
	updateHeadingFontSize.style.fontSize = updateFontSize;
}

//js for big images
const modalTxt = document.querySelector(".pic-text");
document.querySelectorAll('.imagecontainer img').forEach(Image =>{
Image.onclick = () =>{
  document.querySelector('.pop-up-image').style.display = 'block';
  document.querySelector('.pop-up-image img').src = Image.getAttribute('src');
  modalTxt.innerHTML = Image.alt;
  modalTxt.style.display = 'block';
}
}); 

// js part for big image's short introductions
document.querySelector('.pop-up-image span').onclick = () =>{
document.querySelector('.pop-up-image').style.display = 'none';
modalTxt.style.display = 'none';

} 

// function for image hover part
function big(x) {
x.style.height = "380px";
x.style.width = "330px";
}

function normal(x) {
x.style.height = "350px";
x.style.width = "300px";
}
