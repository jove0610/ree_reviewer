import React, { useState } from 'react';
import Questionnaire from './Questionnaire';
import esas2020 from '../questionnaires/esas_2020_feb.json';
import esas2019a from '../questionnaires/esas_2019_mar.json';

const Year = () => {
  const [examJSON, setExamJSON] = useState(esas2020);
  const [examDate, setExamDate] = useState('Feb 2020');

  const onClick = (yearJSON, date) => {
    setExamDate(date);
    setExamJSON(yearJSON);
  };

  return (
    <section className='app__main'>
      <nav className='app__main__navYear'>
        <button
          className='app__main__navYear__btn'
          type='button'
          onClick={() => onClick(esas2020, 'Feb 2020')}
        >
          2020
        </button>
        <button
          className='app__main__navYear__btn'
          type='button'
          onClick={() => onClick(esas2019a, 'Mar 2019')}
        >
          2019a
        </button>
      </nav>

      <Questionnaire exam={examJSON} date={examDate} />
    </section>
  );
};

export default Year;
