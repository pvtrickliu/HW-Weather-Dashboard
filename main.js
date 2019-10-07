
        let cityQuery = "";
        let today = new Date();
        let date = "";
        let qwer = "";
        
        if (today.getDate() < 10) {
            date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-0" + today.getDate();
        } else {
            date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        }
        $("#inputGroup-sizing-default").on("click", function () {
            event.preventDefault();
            let cityQuery = $("#searchCityInput").val();
            console.log(cityQuery);
            let finalApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityQuery + "&units=imperial&appid=0a0fc4079b915def8b03cae9bd9ca8f5";
            let lat = 0;
            let lon = 0;
            let prevsearch = $("<button>");
            prevsearch.text(cityQuery);
            prevsearch.addClass("list-group-item");
            prevsearch.attr("id", "hellobutton");
            prevsearch.attr("data-name", cityQuery);
            $("#previousSearched").prepend(prevsearch);
            $.ajax({
                url: finalApi,
                method: "GET"
            })
                .then(function (response) {
                    $(".col-sm").addClass("forecastC");

                    //icon url for openweather = https://openweathermap.org/img/w/{ID GOES HERE}.png

                    let pnglink = response.list[0].weather[0].icon;
                    let pngfile = "https://openweathermap.org/img/w/" + pnglink + ".png";
                    console.log(response);
                    $("#city").text(response.city.name + " " + date);
                    let newimg = $("<img>");
                    newimg.attr("src", pngfile);
                    $("#city").append(newimg);
                    $("#temperature").text("Temperature: " + response.list[0].main.temp);
                    $("#humidity").text("Humidity: " + response.list[0].main.humidity);
                    $("#windspeed").text("Wind speed: " + response.list[0].wind.speed);
                    
                    lon = response.city.coord.lon;
                    lat = response.city.coord.lat;
                    console.log(lon + " " + lat);
                    let apiIndex = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=0a0fc4079b915def8b03cae9bd9ca8f5"
                    let date1 = response.list[4].dt_txt;
                    let newdate1 = date1.slice(0, 10);
                    let date1img = $("<img>");
                    $("#5daydate1").text(newdate1);
                    $("#image1").attr("src", "https://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png");
                    $("#5daytemp1").text(response.list[4].main.temp);
                    $("#5dayhumid1").text(response.list[4].main.humidity);
                    let date2 = response.list[12].dt_txt;
                    let newdate2 = date2.slice(0, 10);
                    let date2img = $("<img>");
                    $("#5daydate2").text(newdate2);
                    $("#image2").attr("src", "https://openweathermap.org/img/w/" + response.list[12].weather[0].icon + ".png");
                    $("#5daytemp2").text(response.list[12].main.temp);
                    $("#5dayhumid2").text(response.list[12].main.humidity);
                    let date3 = response.list[20].dt_txt;
                    let newdate3 = date3.slice(0, 10);
                    let date3img = $("<img>");
                    $("#5daydate3").text(newdate3);
                    $("#image3").attr("src", "https://openweathermap.org/img/w/" + response.list[20].weather[0].icon + ".png");
                    $("#5daytemp3").text(response.list[20].main.temp);
                    $("#5dayhumid3").text(response.list[20].main.humidity);
                    let date4 = response.list[28].dt_txt;
                    let newdate4 = date4.slice(0, 10);
                    let date4img = $("<img>");
                    $("#5daydate4").text(newdate4);
                    $("#image4").attr("src", "https://openweathermap.org/img/w/" + response.list[28].weather[0].icon + ".png");
                    $("#5daytemp4").text(response.list[28].main.temp);
                    $("#5dayhumid4").text(response.list[28].main.humidity);
                    let date5 = response.list[36].dt_txt;
                    let newdate5 = date5.slice(0, 10);
                    let date5img = $("<img>");
                    $("#5daydate5").text(newdate5);
                    $("#image5").attr("src", "https://openweathermap.org/img/w/" + response.list[36].weather[0].icon + ".png");
                    $("#5daytemp5").text(response.list[36].main.temp);
                    $("#5dayhumid5").text(response.list[36].main.humidity);
                    $.ajax({
                        url: apiIndex,
                        method: "GET"
                    })
                        .then(function (response) {
                            console.log(response);
                            $("#uvindex").text("UV Index " + response[0].value);
                        });
                    $("#hellobutton").on("click", function (event) {
                        event.preventDefault();
                        cityQuery = $(this).attr("data-name");
                        console.log(cityQuery);
                    })
                })
        });