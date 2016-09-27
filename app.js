function getSteamAPI() {

	var url = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=EED3FEBD33BAECC41D2AB8DD570C8707'

	$.ajax({
		url: url,
		dataType: "json",
		type: "get"
	})
	.done(function(result) {
		console.log(result);
	})
}

$(document).ready(function() {
	getSteamAPI();
});
