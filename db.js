jQuery(function($) {
	getAllData();
	
	$("#submitVal").submit(function (event) {
		event.preventDefault();	
		url = 'https://api.mongolab.com/api/1/databases/dict/collections/col?q={"word":"' 
			+ $("#word").val() + '"}&apiKey=aAvjOc288WQNRQzjXnyZRQ_Q0pT5nnkF';
		
		$.getJSON(url,function(json){
			if ( json.length == 0 ) {
				post();
			} else {
				validate();
			}
		});
	});


	function post() {			
		$.ajax( { url: "https://api.mongolab.com/api/1/databases/dict/collections/col?apiKey=aAvjOc288WQNRQzjXnyZRQ_Q0pT5nnkF",
		  data: JSON.stringify( { "word" : $("#word").val(), "origin" : $("#origin").val(), "type" : $("#type").val(), "meaning" : $("#meaning").val(), "eg1" : $("#eg1").val(), "eg2" : $("#eg2").val(), "extra" : $("#extra").val() } ),
		  type: "POST",
		  contentType: "application/json;charset=utf-8",
		} );
		$("#submitVal")[0].reset();
	};
		
	function validate() {
		alert("The word is already inserted");
	}
	
	function getAllData() {
		$.getJSON("https://api.mongolab.com/api/1/databases/dict/collections/col?f={word:1}&apiKey=aAvjOc288WQNRQzjXnyZRQ_Q0pT5nnkF",
        function(data){
          $.each(data, function(i,t){
            $(".modal-ul").append('<li>' + t.word + '</li>');
          });
        });
	}
});
