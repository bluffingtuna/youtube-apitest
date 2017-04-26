$(function() {
	$("form").on("submit", function(e) {
		e.preventDefault();
		// prepare the request
		var request = gapi.client.youtube.search.list({
			part: "snippet",
			type: "video",
			q: encodeURIComponent($("#search").val()).replace(/%20/g,"+"),
			maxResults: 3,
			order: "viewCount",
			publishedAfter: "2015-01-01T00:00:00Z"
		});
		//execute the request
		request.execute(function(response) {
			var results = response.result;
			$.each(results.items, function(index, item) {
				console.log(item);
			})
		})
	});
});

function init() {
	gapi.client.setApiKey("AIzaSyDR8HyLqczOk_klhd_wZASuOlyEr-nsUfM");
	gapi.client.load("youtube", "v3", function(){

	});
}