var AYLIENTextAPI = require('aylien_textapi');
var text_api = new AYLIENTextAPI({
  application_id: "ca993f5b",
  application_key: "4bf718b557360a2a13d13b25c948bbff"
});
var news_url = "http://www.milenio.com/tendencias/noticias_falsas-internet-como_detectar_noticias_falsas-milenio_0_864513728.html";

function authorAPI(url, callback) {
  text_api.extract({url: url}, 
                    function(error, response) {
                      if(error === null) {
                        return callback(response);
                      }
                    }
  );
}

var final = authorAPI(news_url, function(response) {
  console.log(response.author);
});