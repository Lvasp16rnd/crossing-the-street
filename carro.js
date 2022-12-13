let yCarros = [40, 96, 148, 210, 270, 318]; 
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 50;
let alturaCarro = 40;

//carro
let xCarro = 600;

//carro2
let xCarro2 = 600;

//carro3
let xCarro3 = 600;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  } 
}

function movimentaCarro(){
  for (let i =0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i] 
  }
}

function posicaoInicial(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passoDaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passoDaTela(xCarro){
  return xCarro < 0;
}