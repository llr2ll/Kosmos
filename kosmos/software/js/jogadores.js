function salvar(nome, video, informacoes, imagem){
    axios.post('https://sheetdb.io/api/v1/qba3f9zhyjc2k',{
        "data": {
          "jogador": jogador, 
          "video": video, 
          "informacoes": informacoes, 
          "imagem": imagem,
        }
    },{
      "auth": {
        "username": "1qpmb4sw",
        "password": "6umsq6di5wmuabj1kyqe"
      }
	    }
    ).then(response => {
      console.log(response.data)
    })
}

function  coletar(){
  var retorno = null;
  axios.get('https://sheetdb.io/api/v1/qba3f9zhyjc2k',{
    "auth": {
      "username": "1qpmb4sw",
      "password": "6umsq6di5wmuabj1kyqe"
}}).then(response => {
    renderizar(response.data);
}
);
return retorno;
} 

function renderizar(dadosJogadores){
  var container = document.getElementById("container"); 
  
  var tabelaJogadores = "";
  dadosJogadores.forEach(jogador => {
    tabelaJogadores +=  
    "<div class='div'>'" +
    "    <img src=" +  jogador.imagem  + " id='imagem'>"  +
    "    <h1 id='nome'>"  + jogador.nome +  "</h1>" +
    "    <p id='informacoes'>Informações:" + "<a href="+  jogador.informacoes  +">"+  jogador.informacoes  +"</a></p>" +
    "    <iframe src=" + jogador.video + " id='video'></iframe>" +
    "</div>";
  });
  container.innerHTML =  tabelaJogadores;
}


function produtoDe(jogador){
  axios.get
  (`https://sheetdb.io/api/v1/qba3f9zhyjc2k/search?jogador=${jogador}`, {
    "auth": {
      "username": "1qpmb4sw",
      "password": "6umsq6di5wmuabj1kyqe"
    }
  })
  .then( response => {
    console.log(response.data);
  });
}


coletar();