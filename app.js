function showError(e) {
  console.warn("Error", e);
}

function updateUI(info) {
  $("#app").text(JSON.stringify(info));
}

function getLocationURL([city, state]) {
  return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20${state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    $.getJSON({
      url: `https://api.github.com/users/${id}`,
      success: resolve,
      error: reject
    });
  });
}

function getWeatherData(user) {
  return new Promise((resolve, reject) => {
    $.getJSON({
      url: getLocationURL(user.location.split(",")),
      success(weather) {
        resolve({
          user,
          weather: weather.query.results
        });
      },
      error: reject
    });
  });
}

$("#btn").on("click", () => {
  getUser("lastnamearya")
    .then(user => getWeatherData(user))
    .then(data => updateUI(data))
    .catch(showError);
});
