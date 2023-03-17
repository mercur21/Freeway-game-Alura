function setup() {
  createCanvas(500, 400)
  somTrilhaSonora.loop()
}

function draw() {
  background(imagemEstrada)
  mostraAtor()
  mostraCar()
  movimentoCar()
  loopCarros()
  movimentaP()
  verificaColisao()
  mostraPonto()
  marcaPonto()
  limiteTela()
}