function func_menu() {
      var abrir = document.querySelector('ul#Menu_abre_fecha')
      var girar = document.querySelector('img.icone_m')

      if (abrir.style.opacity == 1) {
        abrir.style.opacity = '0'
        abrir.style.top = '-24rem'
        abrir.style.transition = 'opacity 0.5s, top 1s'
        girar.style.transform = 'rotate(0deg)'
        girar.style.transition = 'transform 0.7s'
      }
      else {
        abrir.style.opacity = '1'
        abrir.style.top = '3.2rem'
        abrir.style.transition = 'opacity 0.5s, top 1s'
        girar.style.transform = 'rotate(360deg)'
        girar.style.transition = 'transform 0.7s'
      }
}






function aparecerMenu() {
  var menu = document.getElementById('botoes')
  if (document.documentElement.scrollTop > 700) {
    menu.style.opcity = "1";
  } else {
    menu.style.display = "0";
  }
}
