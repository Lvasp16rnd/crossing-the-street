//ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
  yAtor -= 3;
    }
  if (keyIsDown(DOWN_ARROW)){
    if(podeMover()){
       yAtor += 3;
    }
  }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaInicial();
      somColisao.play();
      if (pontoMaiorQueZero()){
          pontos -= 1;
          }
      }
    }
  }

function voltaInicial(){
  yAtor = 366;
}

function exibirPontos(){
  textAlign(CENTER);
  textSize(30);
  fill(color(3, 2, 1));
  text(pontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    pontos += 1;
    somPonto.play();
    voltaInicial();
  }
}

function pontoMaiorQueZero(){
  return pontos > 0;
}

function podeMover(){
  return yAtor < 366;
}