import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Questionnaire = ({ exam, date }) => {
  const [item, setItem] = useState(0);
  const [answerColor, setAnswerColor] = useState('');
  const { answer } = exam[item];
  const color = '#1b6100';

  // must start with item #1 every time user switches exam year
  useEffect(() => {
    setItem(0);
  }, [exam]);

  const onClickAns = () => {
    if (answerColor) {
      setAnswerColor('');
      return;
    }
    setAnswerColor(color);
  };

  const onClickPrev = () => {
    if (item === 0) {
      setItem(exam.length - 1);
      return;
    }
    setItem(item - 1);
  };

  const onClickNext = () => {
    if (item === exam.length - 1) {
      setItem(0);
      return;
    }
    setItem(item + 1);
  };

  // returns list element(choices) that has inline style of bgColor on the correct answer
  const inspectedListElement = (optionX) => {
    if (answer === optionX) {
      return (
        <li className='choices' style={{ backgroundColor: answerColor }}>
          {exam[item][optionX]}
        </li>
      );
    }
    return <li className='choices'>{exam[item][optionX]}</li>;
  };

  return (
    <section>
      <nav className='app__main__navItems'>
        <button
          className='app__main__navItems__btn'
          type='button'
          onClick={onClickPrev}
        >
          Prev
        </button>
        <button
          className='app__main__navItems__btn'
          type='button'
          onClick={onClickAns}
        >
          Answer
        </button>
        <button
          className='app__main__navItems__btn'
          type='button'
          onClick={onClickNext}
        >
          Next
        </button>
      </nav>
      <main className='app__main__items'>
        <p className='app__main__items__subHeading'>
          {`${item + 1} / ${exam.length}`}
          &nbsp; &nbsp;
          {date}
        </p>
        <div className='app__main__items__questionnaire'>
          <p className='app__main__items__questionnaire__question'>{`${exam[item].questionnaire}`}</p>
          <ol className='app__main__items__questionnaire__choices'>
            {inspectedListElement('optionA')}
            {inspectedListElement('optionB')}
            {inspectedListElement('optionC')}
            {inspectedListElement('optionD')}
          </ol>
        </div>
      </main>
    </section>
  );
};

Questionnaire.propTypes = {
  exam: PropTypes.arrayOf.isRequired,
  date: PropTypes.string.isRequired,
};

export default Questionnaire;
