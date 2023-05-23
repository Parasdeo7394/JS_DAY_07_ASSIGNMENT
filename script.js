var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log("Data", data);
  console.log(data[15].name.common);
  for (var i in data) {
    var res = data[i].name.common;
    console.log(res);

     //GET ALL COUNTRIES IN ASIA
     const asianCountries = jsonData.filter();
     console.log('Countries in Asia: ', asianCountries);


     //COUNTRIES LESS THAN 200000 POPULATION
     const countiesUnder2Lakh = jsonData.filter();
     console.log('Countries under 2 Lakh Population: ', countiesUnder2Lakh);


     //NAME, Capital, Flag
     jsonData.forEach((country) => {
         //PRINT the data
     })


     //TOTAL POPULATION
     const totalPopulation = jsonData.reduce();
     console.log('Total Popuilation: ', totalPopulation);

     //COUNTRY WITH US DOLLAR
     const countryWithUSD = jsonData.find();
     console.log('Country with USD: ', countryWithUSD);
  }
};