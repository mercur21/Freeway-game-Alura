// Variáveis do player:
let xPlayer = 86
let yPlayer = 370
let colisao = false
let meusPontos = 0

function mostraAtor(){
  image(imagemAtor,xPlayer,yPlayer,35,30)
}

function movimentaP(){
  if (keyIsDown(UP_ARROW)){
    yPlayer -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    yPlayer += 3
  }
}
function verificaColisao(){
  for (let i =0; i < imagemCarros.length;i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], compriCarros, altuCarros, xPlayer, yPlayer, 15)
    if (colisao){
      somColidiu.play()
      pontoInicial()
      if (meusPontos > 0){
        meusPontos -= 1
      }
    }
  }
}
function pontoInicial(){
  yPlayer = 395
}

function mostraPonto(){
  textAlign(CENTER)
  textSize(25)
  stroke(color(128,128,128))
  fill(color(255,240,60))
  text(meusPontos, width / 5, 27)
}
function marcaPonto(){
  if (yPlayer < 15){
    meusPontos += 1
    somPontos.play()
    pontoInicial()
  }
}
function limiteTela(){
  if (yPlayer > 395){
    pontoInicial()
  }
}