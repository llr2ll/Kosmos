function salvar(nome, telefone, imagem){
    axios.post('https://sheetdb.io/api/v1/gl846j1aqfhuh',{
        "data": {
          "nome": nome, 
          "telefone": telefone, 
          "imagem": imagem,
        }
    },{
      "auth": {
        "username": "iqo0idp5",
        "password": "30zy4b5rmzb7y1er5l9r"
      }
	    }
    ).then(response => {
      console.log(response.data)
    })
}

function  coletar(){
  var retorno = null;
  axios.get('https://sheetdb.io/api/v1/gl846j1aqfhuh',{
    "auth": {
      "username": "iqo0idp5",
      "password": "30zy4b5rmzb7y1er5l9r"
}}).then(response => {
    renderizar(response.data);
}
);
return retorno;
} 

function renderizar(dadosParceiros){
  var container = document.getElementById("container"); 
  
  var tabelaParceiros = "";
  dadosParceiros.forEach(parceiro => {
    tabelaParceiros +=  
    "<div class='div'>'" +
    "    <img src=" +  parceiro.imagem  + " id='imagem'>"  +
    "    <h1 id='nome'>"  + parceiro.nome +  "</h1>" +
    "    <p id='contato'>Telefone:  +" + " <a href=''>"+  parceiro.telefone  +"</a></p>" +
    "</div>";
  });
  container.innerHTML =  tabelaParceiros;
}

function produtoDe(nome){
  axios.get
  (`https://sheetdb.io/api/v1/gl846j1aqfhuh/search?jogador=${nome}`, {
      "auth": {
        "username": "iqo0idp5",
        "password": "30zy4b5rmzb7y1er5l9r"
      }
  })
   .then( response => {
     console.log(response.data);
    });
}

coletar()