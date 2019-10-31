import React from 'react';
import Grid from '@material-ui/core/Grid';

import Answer from '../../components/Answer/Answer.jsx';
import styles from './HomePage.module.scss';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      areShortsPresent: 'Hmm...'
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <h1>Is Marc Loiselle wearing shorts?</h1>
          </Grid>
          <Grid item md={12}>
            <Answer areShortsPresent={this.state.areShortsPresent} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export { HomePage };
export default HomePage;
