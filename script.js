// get the countires from Asia
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var asian = result.filter(country => country.region == "Asia");
    console.log(asian.map(country => country.name.common));
}


// get countries population less than 200000

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var smallpop = result.filter(country => country.population < 200000);
    console.log(smallpop.map(country => country.name.common));
}


// get name, capital, flag

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    result.forEach(country => {
        console.log(country.name.common,country.capital,country.flag);
    })
}


// total population
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var total = result.reduce((sum,country) => sum+country.population,0);
    console.log(total);
}

//countries using us dollars

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var usd = result.filter( country => {
        if(country.currencies){
            return Object.keys(country.currencies).includes("USD");
        }
    });
    console.log(usd.map(country => country.name.common));
}