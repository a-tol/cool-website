//Updates the forecast elements depe
function updateForecast(){
    $(document).ready(function(){
        //default values:
        //Middlesex College
        //  Lat: 40.510000
        //  Lon: -74.367820
        //40.510000,-74.367820
        //use https://api.weather.gov/points/{latitude},{longitude} 
        //then use https://api.weather.gov/gridpoints/{office}/{grid X},{grid Y}/forecast
        var coordinates = $("#coordField").val();
        $.ajax({
            type: "GET",
            url:"https://api.weather.gov/points/" + coordinates
        })
        .done(function(gridData){
            document.getElementById("location").innerHTML = 
                gridData.properties.relativeLocation.properties.city + "," + gridData.properties.relativeLocation.properties.state;
            $.ajax({
                type: "GET",
                url: gridData.properties.forecast
            })
            .done(function(forecast){
                document.getElementById("forecast").innerHTML = forecast.properties.periods[document.getElementById("forecastNumber").value].detailedForecast;
                document.getElementById("icon").src = forecast.properties.periods[document.getElementById("forecastNumber").value].icon;
                document.getElementById("period").innerHTML = forecast.properties.periods[document.getElementById("forecastNumber").value].name;
            });
        });
    });
}

function updateForecastParam(period){
    $(document).ready(function(){
        //default values:
        //Middlesex College
        //  Lat: 40.510000
        //  Lon: -74.367820
        //40.510000,-74.367820
        //use https://api.weather.gov/points/{latitude},{longitude} 
        //then use https://api.weather.gov/gridpoints/{office}/{grid X},{grid Y}/forecast
        var coordinates = $("#coordField").val();
        $.ajax({
            type: "GET",
            url:"https://api.weather.gov/points/" + coordinates
        })
        .done(function(gridData){
            document.getElementById("location").innerHTML = 
                gridData.properties.relativeLocation.properties.city + "," + gridData.properties.relativeLocation.properties.state;
            $.ajax({
                type: "GET",
                url: gridData.properties.forecast
            })
            .done(function(forecast){
                document.getElementById("forecast").innerHTML = forecast.properties.periods[period].detailedForecast;
                document.getElementById("icon").src = forecast.properties.periods[period].icon;
                document.getElementById("period").innerHTML = forecast.properties.periods[period].name;
            });
        });
    });
}