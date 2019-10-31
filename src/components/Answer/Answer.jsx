import React from 'react';
// import styles from './Answer.module.scss';

const Answer = ({ isMarkWearingShorts, pageType }) => {
  const renderVerdict = () => {
    let verdict = isMarkWearingShorts;
    if (pageType === 'home') {
      verdict = 'Hell Yeah';
      if (isMarkWearingShorts === false) {
        verdict = 'Nope Nope Nope';
      }
    } else if (pageType === 'why') {
      verdict = 'is definitely';
      if (isMarkWearingShorts === false) {
        verdict = "probably isn't";
      }
    }
    return verdict;
  }
  return (
    <span> { renderVerdict() } </span>
  );
};

export { Answer };
export default Answer;
