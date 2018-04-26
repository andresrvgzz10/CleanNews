

$(document).ready(function(){

  chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;  

  //Obtener el url por medio de un boton
    $('#botonURL').click(function () {
    
      var final =  "https://api.aylien.com/api/v1/combined?url=" + encodeURIComponent(tablink) + "&endpoint=extract&endpoint=sentiment&endpoint=summarize"; 
  console.log("This the url " + final); 
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": final,
  "method": "GET",
  "headers": {
    "x-aylien-textapi-application-id": "ca993f5b",
    "x-aylien-textapi-application-key": "4bf718b557360a2a13d13b25c948bbff"
  }
}

$.ajax(settings).done(function (response) {
  var contador = 0;
  var autor = response.results[0].result.author
  var sentimineto = response.results[1].result.polarity
  var porceSentimiento = response.results[1].result.polarity_confidence
  var fecha = response.results[0].result.publishDate
  var feed = response.results[0].result.feeds
  var subjetividad = response.results[1].result.subjectivity
  var porceSent = response.results[1].result.subjectivity_confidence
  var sentences = response.results[2].result.sentences
  var titulo = response.results[0].result.title
  var resultado = ""


  //Checar Autor
  if (autor != null || autor != "")  
  {
    contador = contador + 30
  }

  //Checar Fecha
  var fechaNoticia = new Date(fecha)
  var year = fechaNoticia.getFullYear()

  if (year == 2018) 
  {
    contador = contador + 35
  }
  else if (year == 2017) 
  {
    contador = contador + 17.5
  }
  else if (year == 2016) 
  {
    contador = contador + 3
  }


  //Subjetividad
  if (subjetividad == "subjective") {
    contador = contador + (12*porceSent)
  }
  else if (subjetividad == "objective") {
    contador = contador + (8.75*porceSenti)
  }

  //Sentimiento
  if (sentimineto == "positive") 
  {
    contador = contador + (17.5*porceSentimiento)
  }
  else if (sentimineto == "neutral")
  {
    contador = contador + (8.75*porceSentimiento)
  }
  else if (sentimineto == "negative")
  {
    contador = contador + (3*porceSentimiento)
  }


  //Resultado
  if (contador >= 0 && contador <= 25) 
  {
    resultado = "FALSO"
  }
  else if (contador >= 26 && contador <= 49)
  {
    resultado = "DUDOSO"
  }
  else if (contador >= 50 && contador <= 75) 
  {
    resultado = "NO SE PUEDE PROBAR"
  }
  else if (contador >= 76 && contador <= 100)
  {
    resultado = "VERDADERO"
  }

  console.log(contador)
  $('#resultado').text("Resultado: " + resultado);








});

});
}); 
});


