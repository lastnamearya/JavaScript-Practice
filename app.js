function showError(e) {
  console.warn("Error", e);
}

function updateUI(info) {
  $("#app").text(JSON.stringify(info));
}

function getLocationURL([city, state]) {
  return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20${state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
}

const id = "lastnamearya";

function getUser(id, onSuccess, onFailure) {
  $.getJSON({
    url: `https://api.github.com/users/${id}`,
    success: onSuccess,
    error: onFailure
  });
}

function getWeather(user, onSuccess, onFailure) {
  $.getJSON({
    url: getLocationURL(user.location.split(",")),
    success: onSuccess,
    error: onFailure
  });
}

$("#btn").on("click", () => {
  getUser(
    "lastnamearya",
    user => {
      getWeather(
        user,
        weather => {
          updateUI({
            user,
            weather: weather.query.results
          });
        },
        showError
      );
    },
    showError
  );
});
