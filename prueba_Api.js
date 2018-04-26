
//Accesar al API
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "ca993f5b",
  application_key: "4bf718b557360a2a13d13b25c948bbff"
});


function authorAPI(){
  var autor;
	textapi.extract({
  		url: 'http://www.milenio.com/tendencias/noticias_falsas-internet-como_detectar_noticias_falsas-milenio_0_864513728.html',
  		best_image: false
		},function (error, response) 
		{
  			if (error === null) 
  			{
  				autor = response.author;
  			}

		});
  return autor;
};



var final = authorAPI();
console.log(final + " 2");
