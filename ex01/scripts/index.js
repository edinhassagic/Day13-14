var modal = document.getElementById("myModal");
var galleryCard = document.querySelectorAll(".gallery-card-album");
var closeBtn = document.getElementsByClassName("close")[0];

function Gallery() {
  var col1 = 0,
    col2 = 0,
    col3 = 0,
    col4 = 0,
    colW = 200,
    gutter = 20;

  for (var i = 0; i < galleryCard.length; i++) {
    var eHeight = galleryCard[i].offsetHeight;
    if (i == 0) {
      galleryCard[i].style.top = 0;
      galleryCard[i].style.left = 0;
      col1 += eHeight;
    } else if (i == 1) {
      galleryCard[i].style.top = col2 + "px";
      galleryCard[i].style.left = "220px";
      col2 += eHeight;
    } else if (col1 <= col4 && col1 <= col2 && col1 <= col3) {
      galleryCard[i].style.top = col1 + "px";
      galleryCard[i].style.left = 0;
      col1 += eHeight;
    } else if (col2 <= col1 && col2 <= col3 && col3 <= col4) {
      galleryCard[i].style.top = col2 + "px";
      galleryCard[i].style.left = "220px";
      col2 += eHeight;
    } else if (col3 <= col2 && col3 <= col2 && col3 <= col4) {
      galleryCard[i].style.top = col3 + "px";
      galleryCard[i].style.left = "440px";
      col3 += eHeight;
    } else if (col4 <= col3 && col4 <= col1 && col4 <= col3) {
      galleryCard[i].style.top = col4 + "px";
      galleryCard[i].style.left = "660px";
      col4 += eHeight;
    }

    galleryCard[i].onclick = function () {
      var modalSrc = this.getAttribute("data-source");
      modal.style.display = "block";
      var openPage = new XMLHttpRequest();
      openPage.open("GET", "../src/" + modalSrc, true);
      openPage.onreadystatechange = function () {
        document.getElementById("modalContent").innerHTML = this.responseText;
      };
      openPage.send();
    };
  }
}

window.onload = Gallery;
closeBtn.onclick = function () {
  modal.style.display = "none";
};

var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function openModal(stranica) {
  var modalIframe = document.getElementById("stranica");
  modalIframe.src = stranica;
  document.getElementById("myModal").style.display = "block";
}