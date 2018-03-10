if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude, function(json) {
        $(".title").html("<BR>" +  json.name + "!")
        $(".apitext").html(JSON.stringify(json));
        $(".weatherbtn").html(json.main.temp + " °C");
        $(".description").html("Description: " + json.weather[0].description + "</br>" + "Min: " + json.main.temp_min + " - Max: " + json.main.temp_max + "</br>" + "Humidity: " + json.main.humidity + "%" + "</br>" + "Wind Spped: " + json.wind.speed + "k/h");
        // $(".minmax").html("Min: " + json.main.temp_min + " - Max: " + json.main.temp_max);
        // $(".humidity").html("Humidity: " + json.main.humidity + "%");
        $(".weatherbtn").click(function() {
          var grades = document.getElementsByClassName("weatherbtn")[0].innerHTML.split("").slice(-2).join("");
          if (grades === "°C"){
            $(".weatherbtn").html((json.main.temp * 1.8 + 32)  + " °F");
            $(".weatherbtn").attr("title", "Click to change to °C");
          } else {
            $(".weatherbtn").html(json.main.temp + " °C");
            $(".weatherbtn").attr("title", "Click to change to °F");
          }
        });

        var currentmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
        var currentday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var datenow = new Date();
        console.log(currentday[datenow.getDay()]);
        $(".dateandtime").html(currentday[datenow.getDay()] + ", " + currentmonth[datenow.getMonth()] + " " + datenow.getDate()+ " " + datenow.getFullYear() + " " + datenow.getHours()+":"+datenow.getMinutes());

        var seek = json.weather[0].icon.indexOf(".png");
        var descripcion = json.weather[0].icon.slice(seek-3, seek);
        console.log(descripcion);
        switch (descripcion) {
          case "01d":
            $(".bodybg").css("background-image", 'url("resources/01d.png")');
            break;
          case "01n":
            $(".bodybg").css("background-image", 'url("resources/01n.png")');
            break;
          case "02d":
            $(".bodybg").css("background-image", 'url("resources/02d.png")');
            break;
          case "02n":
            $(".bodybg").css("background-image", 'url("resources/02n.png")');
            break;
          case "03d":
            $(".bodybg").css("background-image", 'url("resources/03d.png")');
            break;
          case "03n":
            $(".bodybg").css("background-image", 'url("resources/03n.png")');
            break;
          case "04d":
            $(".bodybg").css("background-image", 'url("resources/03d.png")');
            break;
          case "04n":
            $(".bodybg").css("background-image", 'url("resources/03n.png")');
            break;
          case "09d":
            $(".bodybg").css("background-image", 'url("resources/09d.png")');
            break;
          case "09n":
            $(".bodybg").css("background-image", 'url("resources/09n.png")');
            break;
          case "10d":
            $(".bodybg").css("background-image", 'url("resources/10d.png")');
            break;
          case "10n":
            $(".bodybg").css("background-image", 'url("resources/10n.png")');
            break;
          case "11d":
            $(".bodybg").css("background-image", 'url("resources/11d.png")');
            break;
          case "11n":
            $(".bodybg").css("background-image", 'url("resources/11n.png")');
            break;
            case "13d":
            $(".bodybg").css("background-image", 'url("resources/13d.png")');
            break;
            case "13n":
            $(".bodybg").css("background-image", 'url("resources/13n.png")');
            break;
            case "50d":
            $(".bodybg").css("background-image", 'url("resources/50d.png")');
            break;
            case "50n":
            $(".bodybg").css("background-image", 'url("resources/50n.png")');
            break;
          default:
          $('.bodybg').css('background-image', 'url("resources/clear sky day.png")');
            break;
        }
      });
    });
  }