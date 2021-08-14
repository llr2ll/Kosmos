function salvar(nome, email, telefone, imagem){
    axios.post('https://sheetdb.io/api/v1/6696pbog4qtnr',{
        "data": {
          "nome": nome, 
          "email": email, 
          "telefone": telefone,
          "imagem": imagem,
        }
    },{
      "auth": {
        "username": "ng596rm0",
        "password": "q3z5pqhffaishnmis9b1"
      }
	    }
    ).then(response => {
      console.log(response.data)
    })
}

function  coletar(){
  var retorno = null;
  axios.get('https://sheetdb.io/api/v1/6696pbog4qtnr',{
    "auth": {
      "username": "ng596rm0",
      "password": "q3z5pqhffaishnmis9b1"
}}).then(response => {
    renderizar(response.data);
}
);
return retorno;
} 

function renderizar(dadosPresidentes){
  var container = document.getElementById("container"); 
  
  var tabelaPresidentes = "";
  dadosPresidentes.forEach(presidente => {
    tabelaPresidentes +=  
    "<div class='div'>'" +
    "    <img src=" +  presidente.imagem  + " id='imagem'>"  +
    "    <h1 id='nome'>"  + presidente.nome +  "</h1>" +
    "    <p id='contato'>Telefone: +" + "<a href=''>"+  presidente.telefone  +"</a></p>" +
    "    <p id='contato'>Email:" + "<a href=''>"+  presidente.email  +"</a></p>" +
    "</div>";
  });
  container.innerHTML =  tabelaPresidentes;
}

function produtoDe(nome){
  axios.get
  (`https://sheetdb.io/api/v1/6696pbog4qtnr/search?jogador=${nome}`, {
      "auth": {
        "username": "ng596rm0",
        "password": "q3z5pqhffaishnmis9b1"
      }
  })
   .then( response => {
     console.log(response.data);
    });
}

coletar();