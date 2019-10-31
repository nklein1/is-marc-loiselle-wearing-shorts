import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ajaxHelper, decideAttire, isForecastOutdated } from '../../helpers/helpers.js';
import Answer from '../../components/Answer/Answer.jsx';
import styles from './HomePage.module.scss';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: JSON.parse(sessionStorage.getItem('weather')) || null
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
    sessionStorage.setItem('weather', JSON.stringify(data));
    this.setState({ weather: data });
  }

  updateForecast = () => {
    let cityID = '4930956';
    let units = 'imperial';
    let uri = '?id=' + cityID + '&units=' + units + '&APPID=' + process.env.REACT_APP_API_TOKEN;
    ajaxHelper('GET', uri, this.saveWeatherData, this.parseError);
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid container>
          <Grid item md={12} >
            <h1>Is Marc Loiselle wearing shorts?</h1>
          </Grid>
          <Grid item md={12}>
            <h1>
              <Answer
              isMarkWearingShorts={ decideAttire(this.state.weather) }
              pageType={'home'} />
            </h1>
          </Grid>
          <Grid item md={12}>
            <a href="/why">Why?</a>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export { HomePage };
export default HomePage;
