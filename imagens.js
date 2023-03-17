let imagemEstrada
let imagemAtor
let imagemCar1
let imagemCar2
let imagemCar3
let somTrilhaSonora
let somColidiu
let somPontos

function preload(){
  // Sons
  somTrilhaSonora = loadSound("sons/trilha.mp3")
  somPontos = loadSound("sons/pontos.wav")
  somColidiu = loadSound("sons/colidiu.mp3")
  // Imagens 
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemAtor = loadImage("imagens/ator-1.png")
  imagemCar1 = loadImage("imagens/carro-1.png")
  imagemCar2 = loadImage("imagens/carro-2.png")
  imagemCar3 = loadImage("imagens/carro-3.png")
  // Lista da imagem dos carros
  imagemCarros = [imagemCar1, imagemCar2, imagemCar3, imagemCar2, imagemCar1, imagemCar3]
}