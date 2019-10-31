import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ajaxHelper, decideAttire } from '../../helpers/helpers.js';
import Answer from '../../components/Answer/Answer.jsx';
import styles from './HomePage.module.scss';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isMarkWearingShorts: 'Hmm...',
      weather: JSON.parse(localStorage.getItem('weather')) || null
    }
  }

  componentDidMount() {
    // Avoid re-fetching weather data to preserve API usage
    if (!this.state.weather) {
      this.updateForecast();
    } else {
      this.setState({
        isMarkWearingShorts: decideAttire(this.state.weather)
      });
    }
  }

  // Save weather data
  saveWeatherData = (data) => {
    localStorage.setItem('weather', JSON.stringify(data));
    this.setState({
      weather: data,
      isMarkWearingShorts: decideAttire(this.state.weather)
    });
  }

  updateForecast = () => {
    let cityID = '4930956';
    let units = 'imperial';
    let token = '7edf14d2a1b5c880692392447d6bc828';
    let uri = '?id=' + cityID + '&units=' + units + '&APPID=' + process.env.REACT_APP_API_TOKEN;
    ajaxHelper('GET', uri, this.saveWeatherData, this.parseError);
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid container spacing={2}>
          <Grid item md={12} >
            <h1>Is Marc Loiselle wearing shorts?</h1>
          </Grid>
          <Grid item md={12}>
            <Answer isMarkWearingShorts={ decideAttire(this.state.weather) } />
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
