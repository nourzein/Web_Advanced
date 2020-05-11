window.addEventListener("DOMContentLoaded", function() {
  //   loadData();
  attachEvent();
});

attachEvent = () => {
  $("#search-button").click(() => {
    loadData();
    $("#city").val("");
  });
  $("#city").keypress(e => {
    if (e.keyCode == 13) {
      loadData();
      $("#city").val("");
    }
  });
};

loadData = () => {
  let city = $("#city").val();

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=66d567a3363fdaf33aaf1d24427b26e8",
    data => {
      console.log(data);
      let temp = data.main.temp;
      let description = data.weather[0].description;
      //console.log(temp);
      //k* 9/5 - 459.67
      //$(".temp").html(Math.round(temp - 273.15 + " " + "degrees Celcius"));
      $(".weather").html(description);
      $(".temp").empty();
      $(".temp").append(
        Math.floor((temp * 9) / 5 - 459.67) + " " + "degrees Celcius"
      );
    }
  );
};
