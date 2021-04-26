import React, { useState } from 'react';
import Questionnaire from './Questionnaire';
import esas20 from '../questionnaires/esas_2020.json';
import esas19 from '../questionnaires/esas_2019.json';
import esas18 from '../questionnaires/esas_2018.json';

const Year = () => {
  // Props to be
  const subject = 'ESAS';
  const questionBank = [
    {
      json: esas20,
      year: '2020',
    },
    {
      json: esas19,
      year: '2019',
    },
    {
      json: esas18,
      year: '2018',
    },
  ];
  ///
  const [examJSON, setExamJSON] = useState(questionBank[0].json);
  const [examDetail, setExamDetail] = useState(
    `${subject} ${questionBank[0].year}`
  );
  const [currentItem, setCurrentItem] = useState(0);

  const onClick = (jsonFile, detail) => {
    if (examJSON === jsonFile) return;

    setCurrentItem(0); // start at item 0 when changing year
    setExamDetail(detail);
    setExamJSON(jsonFile);
  };

  const changeItemCallback = (item) => {
    setCurrentItem(item);
  };

  // const createButton = (json, year) => {
  //   if (!json) {
  //     return null;
  //   }

  //   return (
  //     <button
  //       className='app__main__navYear__btn'
  //       type='button'
  //       onClick={() => onClick(json, `${subject} ${year}`)}
  //     >
  //       {year}
  //     </button>
  //   );
  // };

  const renderedButton = () =>
    questionBank.map((testSet) => (
      <button
        key={testSet.year}
        className='app__main__navYear__btn'
        type='button'
        onClick={() => onClick(testSet.json, `${subject} ${testSet.year}`)}
      >
        {testSet.year}
      </button>
    ));

  return (
    <section className='app__main'>
      <nav className='app__main__navYear'>
        {/* <button
          className='app__main__navYear__btn'
          type='button'
          onClick={() => onClick(esas2020, `${subject} 2020`)}
        >
          2020
        </button>
        <button
          className='app__main__navYear__btn'
          type='button'
          onClick={() => onClick(esas2019, `${subject} 2019`)}
        >
          2019
        </button>
        <button
          className='app__main__navYear__btn'
          type='button'
          onClick={() => onClick(esas2018, `${subject} 2018`)}
        >
          2018
        </button> */}

        {/* {createButton(questionBank[0], '2020')}
        {createButton(questionBank[1], '2019')}
        {createButton(questionBank[2], '2018')}
        {createButton(questionBank[3], '2017')} */}

        {renderedButton()}
      </nav>

      <Questionnaire
        exam={examJSON}
        date={examDetail}
        currentItem={currentItem}
        changeItemCallback={changeItemCallback}
      />
    </section>
  );
};

export default Year;
