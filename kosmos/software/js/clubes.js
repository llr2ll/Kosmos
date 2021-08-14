function salvar(nome, email, telefone){
    axios.post('https://sheetdb.io/api/v1/uxwxmfovtrqrn',{
        "data": {
          "nome": nome, 
          "email": email, 
          "telefone": telefone,
        }
    },{
      "auth": {
        "username": "i1nsw2fw",
        "password": "r0jl1rul5fwcyzzes9zo"
      }
	    }
    ).then(response => {
      console.log(response.data)
    })
}

function  coletar(){
  var retorno = null;
  axios.get('https://sheetdb.io/api/v1/uxwxmfovtrqrn',{
    "auth": {
      "username": "i1nsw2fw",
      "password": "r0jl1rul5fwcyzzes9zo"
}}).then(response => {
    renderizar(response.data);
}
);
return retorno;
} 

function renderizar(dadosClubes){
  var container = document.getElementById("container"); 
  
  var tabelaClubes = "";
  dadosClubes.forEach(clube => {
    tabelaClubes +=  
    "<div class='div'>'" +
    "    <img src=" +  clube.imagem  + " id='imagem'>"  +
    "    <h1 id='nome'>"  + clube.nome +  "</h1>" +
    "    <p id='contato'>Telefone: +" + "<a href=''>"+  clube.telefone  +"</a></p>" +
    "    <p id='contato'>Email:" + "<a href=''>"+  clube.email  +"</a></p>" +
    "</div>";
  });
  container.innerHTML =  tabelaClubes;
}


function produtoDe(nome){
  axios.get
  (`https://sheetdb.io/api/v1/uxwxmfovtrqrn/search?jogador=${nome}`, {
      "auth": {
        "username": "i1nsw2fw",
        "password": "r0jl1rul5fwcyzzes9zo"
      }
  })
   .then( response => {
     console.log(response.data);
    });
}

coletar()