

//ubicacion
function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}

		var latitud, longitud;

	    var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;
	}

	var funcionError = function(error){
		alert("Tenemos un problema con encontrar tu ubicación");
	}
}

buscar();


//api clikr

var ajaxFondo = function(fondo){
	$.ajax({
		url: 'https://up.flickr.com/services/rest/',
		type: 'GET',
		datatype: 'json',
		data: {
			method:"flickr.photos.search"
			api_key: '17660d0d33030a684ee3af1e8300768f',
		}
	})
	.done(function(response){
		console.log(response);
		ajaxFondo(response.data);
	})
	.fail(function(){
		console.log("error");
	});
}

//api pronostico del tiempo
//'https://api.darksky.net/forecast/[key]/[latitude],[longitude]',
//https://api.darksky.net/forecast/c2fc02a0121efa78a31284d225dca802/37.8267,-122.4233
function weather(latitude, longitude){
	$.ajax({
		url: 'https://api.darksky.net/forecast/c2fc02a0121efa78a31284d225dca802/37.8267,-122.4233',
		type: 'GET',
		dataType: 'json',
		
	})
	.done(function(response) {
		console.log(response);
		weather(response.data);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
}