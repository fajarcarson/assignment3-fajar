const ybtn = document.querySelector(".xbtn");
const inputElement = document.querySelector(".inputElement");

    ybtn.addEventListener("click", getData);

    function getData(){
        let country = inputElement.value;
        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': 'f6f1cf120dmsh08290f8ff6c5d77p100314jsn57fc5d5adf46',
		        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	        }
        };

        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, options)
	    .then((response) => response.json())
	    .then((json) => {
            let data = json.response[0];
            document.querySelector(".countryCases").innerHTML = data.country;
            document.querySelector(".activeCases").innerHTML = data.cases.active.toLocaleString();
            document.querySelector(".newCases").innerHTML = data.cases.new.toLocaleString();
            document.querySelector(".recoveredCases").innerHTML = data.cases.recovered.toLocaleString();
            document.querySelector(".totalCases").innerHTML = data.cases.total.toLocaleString();
            document.querySelector(".totalDeaths").innerHTML = data.deaths.total.toLocaleString();
            document.querySelector(".totalTests").innerHTML = data.tests.total.toLocaleString();

        })
	    .catch(err => console.error(err));

    }
