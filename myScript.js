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
//----google Photo load
function listGoogleFolderFile(){
    const apiKey = "AIzaSyB9sIIxnF3LTS6-7oN-D3HbV4ZGOz5ReT4";
    const folderId = '1MRnPPdsmNHNHdtSG0sSpuKkNmdrmUQiC';
//    https://drive.google.com/drive/folders/1MRnPPdsmNHNHdtSG0sSpuKkNmdrmUQiC?usp=sharing
//GET https://www.googleapis.com/drive/v2/files?q=a1MRnPPdsmNHNHdtSG0sSpuKkNmdrmUQiC&key=AIzaSyB9sIIxnF3LTS6-7oN-D3HbV4ZGOz5ReT4
    const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=${apiKey}`;
    console.log(apiUrl);
//    console.log(apiUrl);
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const files = data.files;
        if (files && files.length > 0) {
          files.forEach(file => {
            console.log(file.name, '(', file.id, ')');
          });
        } else {
          console.log('No files found.');
        }
        })
        .catch(error => {
        console.error('Error:', error);
    });
}
function caricaFotoDaGoogle_small(folderId){
var imgNumber = 1;
    const apiKey = "AIzaSyB9sIIxnF3LTS6-7oN-D3HbV4ZGOz5ReT4";
    const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=${apiKey}`;
    console.log(apiUrl);
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('galleriaSmall');
        const containerBig = document.getElementById('galleriaBig');
        const files = data.files;
        if (files && files.length > 0) {
            files.forEach(file => {
//            costruisco le img piccole
                const div = document.createElement('div');
                div.classList.add("galleriaScacchiera_photoDiv");
                div.id="placeHere";
                var elem = document.createElement("img");
//                https://www.googleapis.com/drive/v3/files/1c9biQJcw4hbG19iV318EPLet53LPSMSt?alt=media&key=AIzaSyB9sIIxnF3LTS6-7oN-D3HbV4ZGOz5ReT4
                elem.setAttribute("src", "https://www.googleapis.com/drive/v3/files/"+file.id+'?alt=media&key='+apiKey);

//                elem.setAttribute("src", "https://drive.google.com/uc?export=view&id="+file.id);
                elem.setAttribute("alt","Immagine da Google Drive");
//                                elem.setAttribute("src", "https://drive.usercontent.google.com/download?export=view&authuser=0&id=1hEBbe4Jb6MbaDokcmCLorSpwvh66Xen3");

                elem.setAttribute("style", "width:100%; max-height: 300px; ");
                elem.setAttribute("onclick", "openModal();currentSlide("+imgNumber+")");
                elem.setAttribute("class", "hover-shadow cursor")
                container.appendChild(div);
                document.getElementById("placeHere").appendChild(elem);
                document.getElementById("placeHere").id="";
                imgNumber=imgNumber+1;
 //            costruisco le img grandi
                const divBig = document.createElement('div');
                divBig.classList.add("mySlides");
                divBig.id="placeHere";
                var elemBig = document.createElement("img");
                 elemBig.setAttribute("src", "https://www.googleapis.com/drive/v3/files/"+file.id+'?alt=media&key='+apiKey);
//                elemBig.setAttribute("src", "https://drive.google.com/uc?export=view&id="+file.id);
                elemBig.setAttribute("alt","Immagine da Google Drive");
//                                elemBig.setAttribute("src", "https://drive.usercontent.google.com/download?export=view&authuser=0&id=1hEBbe4Jb6MbaDokcmCLorSpwvh66Xen3");
                elemBig.setAttribute("style", "width:100%;");
                containerBig.appendChild(divBig);
                document.getElementById("placeHere").appendChild(elemBig);
                document.getElementById("placeHere").id="";
            });
        }
    });
}

//    var imgNumber = 1;
//    fetch(fileInput)
//      .then(response => response.text())
//      .then(data => {
//        const lines = data.split('\n');
//        const container = document.getElementById('galleriaSmall');
//        lines.forEach(line => {
//          const div = document.createElement('div');
//          div.classList.add("galleriaScacchiera_photoDiv");
//          div.id="placeHere";
//          var elem = document.createElement("img");
//          elem.setAttribute("src", line+256);
//          elem.setAttribute("style", "width:100%");
//          elem.setAttribute("onclick", "openModal();currentSlide("+imgNumber+")");
//          elem.setAttribute("class", "hover-shadow cursor")
//          container.appendChild(div);
//          document.getElementById("placeHere").appendChild(elem);
//          document.getElementById("placeHere").id="";
//          imgNumber=imgNumber+1;
//        });
//      })
////      .catch(error => console.error(error));
//}