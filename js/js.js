

function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis do jogo

    var jogo={};

    var TECLA={
        W:87,
        S:83,
        D:68
    };

    jogo.pressionou=[];

    //Variáveis inimigo1:

    var velocidade=5;
    var posicaoY=parseInt(Math.random()*334);
    
    //Verificar se o jogador pressionou ou nao a tecla:

    //game loop
    $(document).keydown(function(e){//keydown informa que existe tecla pressionada.
        jogo.pressionou[e.which]=true;
    });
    $(document).keyup(function(e){//keydown informa que NÃO existe  tecla pressionada.
        jogo.pressionou[e.which]=false;
    });
    
    jogo.timer=setInterval(loop,30);

    function loop(){

        moveFundo();
        moveJogador();
        moveInimigo1();
    }//Fim da função loop

    //Função que movimenta o fundo do jogo:

    function moveFundo() {
	
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);
        
        } // fim da função movefundo()

    function moveJogador(){

        if(jogo.pressionou[TECLA.W]){
            var topo=parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);

            if(topo<=0){
                $("#jogador").css("top",topo+10);
            };
        }
        if(jogo.pressionou[TECLA.S]){
            var topo=parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);

            if(topo>=434){
                $("#jogador").css("top",topo-10);  
            }
        }

        if(jogo.pressionou[TECLA.D]){
            //chama função disparo.
        }

    }//fim da função moveJOgador().

    function moveInimigo1(){

        posicaoX=parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velocidade);
        $("#inimigo1").css("top",posicaoY);

            if(posicaoX<=0){
            posicaoY=parseInt(Math.random()*334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
            }
    }
        

} // Fim da função start

