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
        abrir.style.top = '3.1rem'
        abrir.style.transition = 'opacity 0.5s, top 1s'
        girar.style.transform = 'rotate(360deg)'
        girar.style.transition = 'transform 0.7s'
      }
}



// inicio das funcoes dos botoes face/whatsapp


window.onscroll = function() {
  if (window.matchMedia("(min-width: 1300px)").matches){
    funcao_scrolldesk()
  }
  if (window.matchMedia("(max-width: 1299px)").matches) { // SE x(mediaquery) bater(matches), fazer funcao abaixo
    funcao_scrolltab()
  }
  if (window.matchMedia("(max-width: 699px)").matches){
    funcao_scroll()
  }
}



//variavel para receber a div botoes, funcao p esconder botao e para aparecer
var botoes = document.getElementById("botoes")
function esconder(){
  botoes.style.opacity = "0"
  botoes.style.bottom = "-3rem"
  botoes.style.transition = 'opacity 0.5s, bottom 0.5s'
}


function funcao_scroll() { //funcao para celular
  if (document.documentElement.scrollTop > 790) {
    botoes.style.opacity = "1"
    botoes.style.bottom = "0rem"
    botoes.style.transition = 'opacity 0.5s, bottom 0.5s'
  } else {
    esconder()
  } if (document.documentElement.scrollTop > 5100) {
    esconder()
  }
}

function funcao_scrolltab() { //funcao para table
  if (document.documentElement.scrollTop > 790) {
    botoes.style.opacity = "1"
    botoes.style.bottom = "0rem"
    botoes.style.transition = 'opacity 0.5s, bottom 0.5s'

  } else {
    esconder()
  } if (document.documentElement.scrollTop > 3100) {
    esconder()
  }
}

function funcao_scrolldesk() { //funcao para Desktop
  if (document.documentElement.scrollTop > 1500) {
    botoes.style.opacity = "1"
    botoes.style.bottom = "0rem"
    botoes.style.transition = 'opacity 0.5s, bottom 0.5s'

  } else {
    esconder()
  } if (document.documentElement.scrollTop > 3700) {
    esconder()
  }
}
