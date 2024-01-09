var mesi = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

function differenzaInGiorni() {
  const d1 = new Date();
  const d2 = new Date("2024-09-28");

  const diffInMilliseconds = d2 - d1;

  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  document.write(diffInDays + " to go!");
  return diffInDays;
  }

function includeHTML(Tag, cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName(Tag);
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("file");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        elmnt.innerHTML = this.responseText;
        elmnt.removeAttribute("file");
//          includeHTML(cb);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
}

function includeHTMLheader(Tag, idUnderline,cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName(Tag);
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("file");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        elmnt.innerHTML = this.responseText;
        elmnt.removeAttribute("file");
            document.getElementById("homeLink").classList.add("navTextSimple");
            if (idUnderline){
                document.getElementById(idUnderline).classList.remove("navTextSimple");
                document.getElementById(idUnderline).classList.add("navTextUnderline");
            }
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
}
// ------------------------GALLERIA
function openModal() {
  document.getElementById("myModal").style.display = "block";}
function closeModal() {
  document.getElementById("myModal").style.display = "none";}

var slideIndex = 1; showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n);}

function currentSlide(n) {showSlides(slideIndex = n);}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//
function caricaFotoDaFile_small(fileInput){
    var imgNumber = 1;
    fetch(fileInput)
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n');
        const container = document.getElementById('galleriaSmall');
        lines.forEach(line => {
          const div = document.createElement('div');
          div.classList.add("galleriaScacchiera_photoDiv");
          div.id="placeHere";
          var elem = document.createElement("img");
          elem.setAttribute("src", line+256);
          elem.setAttribute("style", "width:100%");
          elem.setAttribute("onclick", "openModal();currentSlide("+imgNumber+")");
          elem.setAttribute("class", "hover-shadow cursor")
          container.appendChild(div);
          document.getElementById("placeHere").appendChild(elem);
          document.getElementById("placeHere").id="";
          imgNumber=imgNumber+1;
        });
      })
//      .catch(error => console.error(error));
}
function caricaFotoDaFile_big(fileInput){
var imgNumber = 1;
    fetch(fileInput)
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n');
        const container = document.getElementById('galleriaBig');
        lines.forEach(line => {
//        img grandi
          const div = document.createElement('div');
          div.classList.add("mySlides");
          div.id="placeHere";
          var elem = document.createElement("img");
          elem.setAttribute("src", line+1024);
          elem.setAttribute("style", "width:100%");
          container.appendChild(div);
          document.getElementById("placeHere").appendChild(elem);
          document.getElementById("placeHere").id="";
        });
//        lines.forEach(line => {
//        //          img piccole (miniature)
//          const divM = document.createElement('div');
//          divM.classList.add("column");
//          divM.id="placeHere";
//          var elem = document.createElement("img");
//          elem.classList.add("demo");
//          elem.classList.add("cursor");
//          elem.setAttribute("src", line+256);
//          elem.setAttribute("onclick","currentSlide("+imgNumber+")");
//          elem.setAttribute("alt","Nature and sunrise");
//          elem.setAttribute("style", "width:100%");
//          container.appendChild(divM);
//          document.getElementById("placeHere").appendChild(elem);
//          document.getElementById("placeHere").id="";
//          imgNumber=imgNumber+1;
//      })
      });
//      .catch(error => console.error(error));
}