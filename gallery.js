// gallery.js

function upDate(previewPic) {
  
    document.getElementById('image').innerHTML = previewPic.alt;
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHTML = "Hover over an image below to display here.";
}

document.addEventListener("DOMContentLoaded", function () {
    var previewImages = document.getElementsByClassName("preview");

    for (var i = 0; i < previewImages.length; i++) {
        previewImages[i].tabIndex = i + 1;

        previewImages[i].addEventListener("focus", function () {
            upDate(this);
        });

        previewImages[i].addEventListener("blur", function () {
            unDo();
        });
	console.log("Working");
    }