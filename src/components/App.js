import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Questionnaire from './Questionnaire';

import esas20 from '../questionnaires/esas_2020.json';
import esas19 from '../questionnaires/esas_2019.json';
import esas18 from '../questionnaires/esas_2018.json';
import ee19 from '../questionnaires/ee_2019.json';
import ee18 from '../questionnaires/ee_2018.json';

const App = () => {
  const examESAS = [
    {
      json: esas20,
      examSet: 0,
      btnLabel: '2020',
      textLabel: 'ESAS 2020',
    },
    {
      json: esas19,
      examSet: 1,
      btnLabel: '2019',
      textLabel: 'ESAS 2019',
    },
    {
      json: esas18,
      examSet: 2,
      btnLabel: '2018',
      textLabel: 'ESAS 2018',
    },
  ];

  const examEE = [
    {
      json: ee19,
      examSet: 0,
      btnLabel: '2019',
      textLabel: 'EE 2019',
    },
    {
      json: ee18,
      examSet: 1,
      btnLabel: '2018',
      textLabel: 'EE 2018',
    },
  ];

  const [examSubject, setExamSubject] = useState([]);
  const [examSet, setExamSet] = useState({});
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    if (examSubject.length === 0) return;
    setExamSet(examSubject[0]);
  }, [examSubject]);

  const changeSubjectCallback = (subject) => {
    setCurrentItem(0);
    if (subject === 'EE') {
      setExamSubject(examEE);
    }

    if (subject === 'ESAS') {
      setExamSubject(examESAS);
    }
  };

  const changeSetCallback = (set) => {
    setCurrentItem(0);
    setExamSet(set);
  };

  const changeItemCallback = (item) => {
    setCurrentItem(item);
  };

  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__header__title'>REE Reviewer</h1>
      </header>
      <Navigation
        examSubject={examSubject}
        changeSubjectCallback={changeSubjectCallback}
        changeSetCallback={changeSetCallback}
      />
      <Questionnaire
        examSet={examSet}
        currentItem={currentItem}
        changeItemCallback={changeItemCallback}
      />
    </div>
  );
};

export default App;
