import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Questionnaire = ({ exam, date, currentItem, changeItemCallback }) => {
  const [answerColor, setAnswerColor] = useState('');
  const { answer } = exam[currentItem];
  const color = '#1b6100';

  const onClickAns = () => {
    if (answerColor) {
      setAnswerColor('');
      return;
    }
    setAnswerColor(color);
  };

  const onClickPrev = () => {
    if (currentItem === 0) {
      changeItemCallback(exam.length - 1);
      return;
    }
    changeItemCallback(currentItem - 1);
  };

  const onClickNext = () => {
    if (currentItem === exam.length - 1) {
      changeItemCallback(0);
      return;
    }
    changeItemCallback(currentItem + 1);
  };

  // returns list element(choices) that has inline style of bgColor on the correct answer
  const inspectedListElement = (optionX) => {
    if (answer === optionX) {
      return (
        <li className='choices' style={{ backgroundColor: answerColor }}>
          {exam[currentItem][optionX]}
        </li>
      );
    }
    return <li className='choices'>{exam[currentItem][optionX]}</li>;
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
          {`${currentItem + 1} / ${exam.length}`}
          &nbsp; &nbsp;
          {date}
        </p>
        <div className='app__main__items__questionnaire'>
          <p className='app__main__items__questionnaire__question'>{`${exam[currentItem].questionnaire}`}</p>
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
  currentItem: PropTypes.number.isRequired,
  changeItemCallback: PropTypes.func.isRequired,
};

export default Questionnaire;
