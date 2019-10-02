console.log("hello");

$("#location-submit").on("click", function(){
    console.log("searching");
    var location = $("#location-input").val()
    console.log(location);
    getWeather(location);
})

function getWeather(city)
{
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=a4bc557ddf4577b8eed28a9b14224498",
        method: "GET"
      }).then(function(response) {
        console.log(response);
        for(var i = 0; i < response.list.length; i++)
        {
            if(response.list[i].dt_txt.indexOf("15:00:00") !== -1)
            {
                console.log(response.list[i]);
                var temp = convertKelvin(response.list[i].main.temp);
                $(".weather").append("<h1>" + temp + "</h1>")

            }
        }
      });
  
}

function convertKelvin(t)
{
    return Math.round( (((t - 273.15) * 9) / 5 ) + 32 )

}

// a4bc557ddf4577b8eed28a9b14224498
