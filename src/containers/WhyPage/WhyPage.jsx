import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { ajaxHelper, decideAttire, isForecastOutdated } from '../../helpers/helpers.js';
import Answer from '../../components/answer/answer.jsx';
import styles from './whypage.module.scss';

class WhyPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: JSON.parse(sessionStorage.getItem('weather')) || null,
      temp: JSON.parse(sessionStorage.getItem('temp')) || null,
      wind: JSON.parse(sessionStorage.getItem('wind')) || null,
    }
  }

  componentDidMount() {
    // Avoid re-fetching weather data to reduce API usage
    if (!this.state.weather || isForecastOutdated(this.state.weather) === true) {
      this.updateForecast();
    }
  }

  // Save data to session storage & react state
  saveWeatherData = (data) => {
    const weather = data;
    const temp = data.main.temp_max;
    const wind = data.wind.speed;

    sessionStorage.setItem('weather', JSON.stringify(data));
    sessionStorage.setItem('temp', JSON.stringify(temp));
    sessionStorage.setItem('wind', JSON.stringify(wind));

    this.setState({
      weather: weather,
      temp: temp,
      wind: wind
    });
  }

  // Leaving these here so we can allow them to be customized by the user later
  updateForecast = () => {
    let cityID = '4930956';
    let units = 'imperial';
    let uri = '?id=' + cityID + '&units=' + units + '&APPID=' + process.env.REACT_APP_API_TOKEN;
    ajaxHelper('GET', uri, this.saveWeatherData, this.errorCallback);
  }

  renderVerdict = () => {
    let verdict = 'is definitely';
    if (this.state.weather && decideAttire(this.state.weather) !== true) {
      verdict = "probably isn't";
    }
    return verdict;
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid container className={styles.subContainer}>
          <Grid item md={10}>
            <h1>Marc Loiselle is a shorts man. He loves his shorts.</h1>
          </Grid>
          <Grid item md={8}>
            <p>
              And he wears shorts on nearly any day where the temperature is either higher than <strong>40°F</strong> OR higher than <strong>50°F</strong> if the wind speed is <strong>> 15mph</strong>.
            </p>
            <p>
              Since the high temperature for today is <strong>{ this.state.temp }°F</strong>,
              and the max wind speed is <strong>{ this.state.wind }mph</strong>,
              Marc Loiselle
              <strong>
                <Answer isMarkWearingShorts={ decideAttire(this.state.weather) } pageType={'why'} />
                wearing shorts
              </strong>.
            </p>
          </Grid>
          <Grid item md={6}>
            <p>
              Nick Klein found Marc Loiselle's dedication to shorts amusing, so he created this page using React and <a href="https://openweathermap.org/">OpenWeatherMap's API</a>
            </p>
          </Grid>
          <Grid item md={12}>
            <Link to="/">Back to Home</Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export { WhyPage };
export default WhyPage;
