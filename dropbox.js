var aTag = {
	"&#2309;" : "25-115",
	"&#2310;" : "116-139",
	"&#2311;" : "140-145",
	"&#2312;" : "146-146",
	"&#2313;" : "147-175",
	"&#2314;" : "176-176",
	"&#2315;" : "177-178",
	"&#2319;" : "179-185",
	"&#2320;" : "186-187",
	"&#2323;" : "188-192",
	"&#2324;" : "193-195",
	"&#2325;" : "196-287",
	"&#2326;" : "288-321",
	"&#2327;" : "322-368",
	"&#2328;" : "369-388",
	"&#2329;" : "389-390",
	"&#2330;&#13;" : "391-437",
	"&#2331;" : "438-462",
	"&#2332;" : "463-506",
	"&#2333;" : "507-522",
	"&#2334;" : "523-523",
	"&#2335;" : "524-542",
	"&#2336;" : "543-552",
	"&#2337;" : "553-563",
	"&#2338;" : "564-570",
	"&#2339;" : "571-571",
	"&#2340;" : "572-605",
	"&#2341;" : "606-615",
	"&#2342;" : "616-664",
	"&#2343;" : "665-685",
	"&#2344;" : "686-735",
	"&#2346;" : "736-870",
	"&#2347;" : "871-896",
	"&#2348;" : "897-957",
	"&#2349;" : "958-997",
	"&#2350;" : "998-1064",
	"&#2351;" : "1065-1074",
	"&#2352;" : "1075-1113",
	"&#2354;" : "1114-1150",
	"&#2357;" : "1151-1204",
	"&#2358;" : "1205-1225",
	"&#2359;" : "1226-1227",
	"&#2360;" : "1228-1346",
	"&#2361;" : "1347-1379"	
}

var html='';
var pSwitch = '';

for (var name in aTag) {
	html += '<a id="' + aTag[name] + '"class="turnPage" name="' + aTag[name] + '" href="#">' + name + '</a>';
}

jQuery(function($) {
function printSwitch(id) {
	var sp = id.split('-');
	pSwitch = '<input id="prevPage" type="button" value="-"> \
				<label id="pText" type="text">' + sp[0] + '</label> \
				<input id="nextPage" type="button" value="+"><br> \
				<p class="mlevel muted"><span id="sp0">' + sp[0] + '</span> to <span id="spanVal">' + sp[1] + '</span></p>';
	$('#pSelect').html(pSwitch);
}


$('.selector').append(html);
printSwitch("25-115");

	$('.turnPage').click(function () {
		var s = $(this).attr("name").split('-');
		var $name = 'http://dl.dropbox.com/u/4337412/' + s[0] + '.png';
		$('#img-pan').attr("src",$name);
		printSwitch($(this).attr("name"));
		$.blockUI({fadeIn: 1000, timeout: 8000,});
	});
	
	$('#nextPage').click(function () {
		var $thisPage = $('#pText').text();
		var $lastPage = $('#spanVal').text();
		$.trim($lastPage);
		$.trim($thisPage);
		$thisPage++
		
		if($lastPage > $thisPage) {
			var $name = 'http://dl.dropbox.com/u/4337412/' + $thisPage + '.png';
			$('#img-pan').attr("src",$name);
			$('#pText').text($thisPage);
			$.blockUI({fadeIn: 1000, timeout: 8000,});
		}
	});
	
	$('#prevPage').click(function () {
		var $thisPage = $('#pText').text();
		var $lastPage = $('#sp0').text();
		$.trim($lastPage);
		$.trim($thisPage);
		$thisPage--
		
		if($lastPage <= $thisPage) {
			var $fname = 'http://dl.dropbox.com/u/4337412/' + $thisPage + '.png';
			$('#img-pan').attr("src",$fname);
			$('#pText').text($thisPage);
			$.blockUI({fadeIn: 1000, timeout: 8000,});
		}
	});
});
