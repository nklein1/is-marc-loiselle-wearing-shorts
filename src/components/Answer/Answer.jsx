import React from 'react';

import styles from './Answer.module.scss';

class Answer extends React.Component {

  constructor(props) {
    super(props);
  }

  isMarkWearingShorts() {
    let verdict = 'Hell Yeah';
    if (this.props.isMarkWearingShorts === false) {
      verdict = 'Nope Nope Nope';
    }
    return verdict;
  }

  render() {
    return (
      <h1>{ this.isMarkWearingShorts() }</h1>
    );
  }
}

export { Answer };
export default Answer;
