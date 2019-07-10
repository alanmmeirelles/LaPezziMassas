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


window.onscroll = function() {
  funcao_scroll()
}
function funcao_scroll() {
  var botoes = document.getElementById("botoes")
  function esconder(){
    botoes.style.opacity = "0"
    botoes.style.bottom = "-3rem"
    botoes.style.transition = 'opacity 0.5s, bottom 0.5s'
  }
  if (document.documentElement.scrollTop > 830) {
    botoes.style.opacity = "1"
    botoes.style.bottom = "0rem"
    botoes.style.transition = 'opacity 0.5s, bottom 0.5s'
  } else {
    esconder()
  } if (document.documentElement.scrollTop > 5100) {
    esconder()
  }
}
