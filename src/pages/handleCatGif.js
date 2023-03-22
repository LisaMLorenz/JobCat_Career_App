const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.giphy.com/v1/gifs/search?api_key=kOCxdNJFr0qRXkuqLrE3gNuSAIsYsHLW&q=funny+cat&limit=100&offset=0&rating=r&lang=en",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "a8cd16838dmsh9cbc0d4fbef9db9p1d48f6jsndb619db483a9",
		"X-RapidAPI-Host": "giphy.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

export default handleCatGif