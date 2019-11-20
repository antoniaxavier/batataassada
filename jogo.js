const memoria = document.querySelector("#memoria");

let cardHTML = '';

function inicializaJogo(){
    window.pares=shuffle([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]);
    this.passadas = [0,0,0,0,0,0,0,0,0,0];
    this.imgsCartasPre = [["images/menor que.png","images/menor queOK.gif"],["images/maior que.png","images/maior queOK.gif"],
    ["images/mais.png","images/maisOK.gif"],["images/menos.png","images/menosOK.gif"],["images/igual.png","images/igualOK.gif"],
    ["images/pertence.png","images/pertenceOK.gif"],["images/nao pertence.png","images/nao pertenceOK.gif"],["images/porcentagem.png","images/porcentagemOK.gif"],
    ["images/multiplicacao.png","images/multiplicacaoOK.gif"],["images/divisao.png","images/divisaoOK.gif"]];
    window.imgsCartas = window.pares.slice();
    var i, linkCarta,posCarta,valorPassada;
    for (i = 0; i < window.imgsCartas.length; i++) {
        posCarta=window.imgsCartas[i]
        valorPassada=this.passadas[window.imgsCartas[i]]
        linkCarta=this.imgsCartasPre[posCarta][valorPassada];
        passadas[window.imgsCartas[i]]+=1;
        window.imgsCartas[i]=linkCarta;
    }
    console.log(window.pares);
    console.log("----------------")
    console.log(window.imgsCartas);
}

function trocaValorCarta(idClicado){
    console.log(idClicado);
    
    if(document.getElementById(idClicado).src==window.imgsCartas[idClicado]){
        window.valorAtual=-1
        document.getElementById(idClicado).src="images/fundoCarta4.png"
    }
    else{
        document.getElementById(idClicado).src=window.imgsCartas[idClicado];
        if(window.valorAtual==window.pares[idClicado] && idClicado!=idAnt){
            setTimeout(function(){
                document.getElementById(idClicado).remove();
                document.getElementById(idAnt).remove();
                console.log("achouuuuuuuuuuu");
                var i,achou=false;
                for (i = 0; i < 20; i++) {
                    if(document.getElementById(i)!=null){
                        achou=true
                    }
                }
                console.log(achou)
                if(!achou){
                    document.getElementById("div_vitoria_memoria").style.display="block"
                }
           },2000); //delay is in milliseconds 
           console.log(window.valorAtual) 
           console.log(window.pares[idClicado])
            window.valorAtual=-1
            
        }
        else if(window.valorAtual>=0){
            
            setTimeout(function(){
                document.getElementById(idClicado).src="images/fundoCarta4.png"
                document.getElementById(window.idAnt).src="images/fundoCarta4.png"
                console.log("nao achouuuuuuuuuuu");
           },3000); //delay is in milliseconds 

            window.valorAtual=-1
        }
        else{
            window.idAnt= idClicado
            window.valorAtual = window.pares[idClicado]
        }
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
