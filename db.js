$("#submitVal").submit(function (event) {			
	$.ajax( { url: "https://api.mongolab.com/api/1/databases/dict/collections/col?apiKey=aAvjOc288WQNRQzjXnyZRQ_Q0pT5nnkF",
	  data: JSON.stringify( { "word" : $("#word").val(), "origin" : $("#origin").val(), "type" : $("#type").val(), "meaning" : $("#meaning").val(), "eg1" : $("#eg1").val(), "eg2" : $("#eg2").val(), "extra" : $("#extra").val() } ),
	  type: "POST",
	  contentType: "application/json;charset=utf-8",
	} );
	event.preventDefault();	
});
