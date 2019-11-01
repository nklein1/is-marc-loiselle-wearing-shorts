export function ajaxHelper(method, uri, successCallback) {
  return (
    fetch(process.env.REACT_APP_API_HOST + uri, { method: method })
    .then(result => result.json())
    .then(result => {
      successCallback(result);
    })
    .catch((response) => {
      console.log('Received the following server error response while fetching Weather: ', response);
    })
  );
}

export function decideAttire(data) {
  if (data && data.main && data.wind) {
    let temperature = data.main.temp_max;
    let wind = data.wind.speed;
    let isMarkWearingShorts = true;

    if (temperature < 40) {
      isMarkWearingShorts = false;
    } else if (temperature <= 50 && wind > 15) {
      isMarkWearingShorts = false;
    }
    return isMarkWearingShorts;
  } else {
    return 'loading';
  }
}

// Return true if forecast was last updated > 2 hours ago
export function isForecastOutdated(forecastData) {
  let toUpdate = true;
  if (forecastData && forecastData.dt) {
    let today = new Date();
    let lastUpdated = new Date(forecastData.dt * 1000);
    let hoursSinceLastUpdate = Math.abs(today.getTime() - lastUpdated.getTime()) / 36e5;
    if (hoursSinceLastUpdate <= 2) {
      toUpdate = false;
    }
  }
  return toUpdate;
}