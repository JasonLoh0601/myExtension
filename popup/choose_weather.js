$(document).ready(function(){
  $("#getWeatherForcast").click(function(){
      var city = $("#city").val();
      var key = '9921d56ffab02290b305923c201dc64c';

      $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        dataType: 'json',
        type: 'GET',
        data: {q:city, appid: key, units: 'metric'},

        success: function(data){
          var wf = '';
          $.each(data.weather, function(index,val) {
              wf += '<p><b>' + data.name + "</b><img src=" + val.icon +
                ".png></p>"+
               data.main.temp + '&deg;C '+ ' | ' + val.main + " , " +
               val.description
          });
          $("#showWeatherForcast").html(wf);
        }
        });
    });
});
