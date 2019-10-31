import React from 'react';

import styles from './Answer.module.scss';

class Answer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.areShortsPresent}</h1>
    );
  }
}

export { Answer };
export default Answer;
