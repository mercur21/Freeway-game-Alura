// Listas carros
let veloCarros = [4, 3, 3.3, 5, 7, 2.7]
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let compriCarros = 50
let altuCarros = 40

function mostraCar(){
  for (let i =0 ; i < imagemCarros.length; i ++){
    image(imagemCarros[i],xCarros[i],yCarros[i],compriCarros,altuCarros)
    //print("O valor de i é: "+i)
  }
}

function movimentoCar(){
  for (let i = 0; i < xCarros.length; i += 1){
    xCarros[i] -= veloCarros[i]
  }
}

function loopCarros(){
  for (let i =0; i < imagemCarros.length; i ++){
    if (passouTela(xCarros[i])){
      xCarros[i] = 600
    }
  }
}
function passouTela(xCarro){
  return xCarro < -50
}