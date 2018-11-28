var dvContent = document.getElementById("dvContent");
var dvModal = document.getElementById("dvModal");
dvModal.setAttribute("onclick", "CloseModal();");


SetAllImages();
function SetAllImages(){
  var images = document.getElementsByTagName("img");
  for(var i = 0; i < images.length; i++){
    var img = images[i].getAttribute("src");
    images[i].setAttribute("onclick", "OpenModal('"+img+"', '"+images[i].alt+"')");
  }
}


function OpenModal(src, alt){
  dvContent.innerHTML = "";

  var img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  var p = document.createElement("p");
  p.innerText = alt;

  dvContent.appendChild(img);
  dvContent.appendChild(p);

  dvModal.style.display = "block";
}

function CloseModal(){
    dvModal.style.display = "none";
}
