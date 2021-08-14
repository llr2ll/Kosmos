var  pesquisa = document.getElementById("texto");  
pesquisa.addEventListener( "change",  function(){  switch  (pesquisa.value){
   case "Jogadores" : window.location.href="./html/jogadores.html"; break;
   case "Presidentes" : window.location.href="./html/presidentes.html"; break;
   case "Clubes" : window.location.href="./html/clubes.html"; break;
   case "Parceiros" : window.location.href="./html/parceiros.html"; break;
      }      
}); 