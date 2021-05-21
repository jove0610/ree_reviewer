import React, { useState, useEffect } from 'react';
import NavSubject from './NavSubject';
import NavYear from './NavYear';
import Questionnaire from './Questionnaire';

import esas20 from '../questionnaires/esas_2020.json';
import esas19 from '../questionnaires/esas_2019.json';
import esas18 from '../questionnaires/esas_2018.json';
import esas17 from '../questionnaires/esas_2017.json';

import ee19 from '../questionnaires/ee_2019.json';
import ee18 from '../questionnaires/ee_2018.json';
import ee17 from '../questionnaires/ee_2017.json';

import styles from '../css/app.module.css';

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
    {
      json: esas17,
      examSet: 3,
      btnLabel: '2017',
      textLabel: 'ESAS 2017',
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
    {
      json: ee17,
      examSet: 2,
      btnLabel: '2017',
      textLabel: 'EE 2017',
    },
  ];

  const [examSubject, setExamSubject] = useState([]);
  const [examYear, setExamYear] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [activeTabYear, setActiveTabYear] = useState(0);

  useEffect(() => {
    if (examSubject.length === 0) return;
    setExamYear(examSubject[0]);
  }, [examSubject]);

  const changeSubjectCallback = (subject) => {
    setCurrentQuestion(0);
    setActiveTabYear(0);
    if (subject === 'EE') {
      setExamSubject(examEE);
    }

    if (subject === 'ESAS') {
      setExamSubject(examESAS);
    }
  };

  const changeYearCallback = (year) => {
    setCurrentQuestion(0);
    setExamYear(year);
  };

  const changeQuestionCallback = (item) => {
    setCurrentQuestion(item);
  };

  const changeActiveYearTabCallback = (tabIndex) => {
    setActiveTabYear(tabIndex);
  };

  return (
    <div className={styles.app}>
      <header>
        <h1 className={styles.title}>REE Reviewer</h1>
      </header>

      <NavSubject changeSubjectCallback={changeSubjectCallback} />

      <section className={styles.main}>
        <NavYear
          examSubject={examSubject}
          changeYearCallback={changeYearCallback}
          activeTab={activeTabYear}
          changeActiveYearTabCallback={changeActiveYearTabCallback}
        />
        <Questionnaire
          examYear={examYear}
          currentQuestion={currentQuestion}
          changeQuestionCallback={changeQuestionCallback}
        />
      </section>
    </div>
  );
};

export default App;
