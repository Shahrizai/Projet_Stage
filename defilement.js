let startOrder=0;
let arrayImages=[document.querySelector("#img1"), document.querySelector("#img2"), document.querySelector("#img3")];
function changeBanner(){ 
  arrayImages[startOrder].style.display="block";
  if (startOrder > 0)
    arrayImages[startOrder -1].style.display="none";
  else 
    arrayImages[2].style.display="none";
  startOrder== 2 ? startOrder=0 : startOrder++;
}
window.onload = function () {setInterval(changeBanner, 10000)};