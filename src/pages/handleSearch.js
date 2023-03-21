const handleSearch = (searchTerm, setJobs) => {
    if (searchTerm) {
      fetch(`https://jsearch.p.rapidapi.com/search?query=${searchTerm}&page=1&num_pages=1`, {
        "method": "GET",
        "headers": {
          "X-RapidAPI-Key": "a8cd16838dmsh9cbc0d4fbef9db9p1d48f6jsndb619db483a9",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
        }
      })
        .then(response => response.json())
        .then(data => {
        setJobs(data.results);
          
          console.log(data); // shows retrieved data in console just need to parse it out now!
          
  
        })
        .catch(err => console.log(err));
    }
  };
  
  export default handleSearch;
  