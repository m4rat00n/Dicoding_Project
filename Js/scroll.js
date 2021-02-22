let prevscroll = window.pageYOffset;
window.onscroll = function() {
  let currentscroll = window.pageYOffset;
  if (prevscroll > currentscroll){
    document.getElementById("navbar").style.top = "0";
  }
  else{
    document.getElementById("navbar").style.top = "-50px";
  }
  prevscroll = currentscroll;
}