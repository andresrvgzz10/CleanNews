
//Accesas API
var AYLIENTextAPI = require('aylien_textapi');
var text_api = new AYLIENTextAPI({
  application_id: "ca993f5b",
  application_key: "4bf718b557360a2a13d13b25c948bbff"
});

//Agarrar Autor
function authorAPI(url, callback) {
  text_api.extract({url: url}, 
                    function(error, response) {
                      if(error === null) {
                        return callback(response);
                      }
                    }
  );
}

/*
textapi.sentiment({
  url: 'https://elpais.com/economia/2017/12/12/actualidad/1513069403_637527.html',
  mode: 'document'
}, function(error, response) {
  if (error === null) {
    console.log(response.polarity);
  }
});
*/

/*
textapi.hashtags({
  url: 'http://www.milenio.com/tendencias/noticias_falsas-internet-como_detectar_noticias_falsas-milenio_0_864513728.html'
}, function(error, response) {
  if (error === null) {
    console.log(response.hashtags);
  }
});
*/