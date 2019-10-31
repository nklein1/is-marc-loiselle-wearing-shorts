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
  let temperature = data.main.temp_max;
  let wind = data.wind.speed;
  let isMarkWearingShorts = true;

  if (temperature < 40) {
    isMarkWearingShorts = false;
  } else if (temperature <= 50 && wind > 15) {
    isMarkWearingShorts = false;
  }
  return isMarkWearingShorts;
}
