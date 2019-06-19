function func_menu() {
  var x = document.getElementById("Menu_abre_fecha");
  if (x.style.display === "block") {
      x.style.display = "none";
  } 
  else {
      x.style.display = "block";
  }

}


window.onscroll = function() {funcao_scroll()};
function funcao_scroll() {
  if (document.documentElement.scrollTop > 500) {
    document.getElementById("botao_top").style.display = "block";
  } else {
    document.getElementById("botao_top").style.display = "none";
  }
}

function para_topo() {
  document.documentElement.scrollTop = 0;
}
