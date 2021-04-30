import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Questionnaire = ({ examSet, currentItem, changeItemCallback }) => {
  if (Object.keys(examSet).length === 0) {
    return null;
  }
  const [answerColor, setAnswerColor] = useState('');
  const examJSON = examSet.json;
  const { answer } = examJSON[currentItem];
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
      changeItemCallback(examJSON.length - 1);
      return;
    }
    changeItemCallback(currentItem - 1);
  };

  const onClickNext = () => {
    if (currentItem === examJSON.length - 1) {
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
          {examJSON[currentItem][optionX]}
        </li>
      );
    }
    return <li className='choices'>{examJSON[currentItem][optionX]}</li>;
  };

  return (
    <section className='app__main'>
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
          {`${currentItem + 1} / ${examJSON.length}`}
          &nbsp; &nbsp;
          {examSet.textLabel}
        </p>
        <div className='app__main__items__questionnaire'>
          <p className='app__main__items__questionnaire__question'>{`${examJSON[currentItem].questionnaire}`}</p>
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
  examSet: PropTypes.objectOf(PropTypes.any).isRequired,
  currentItem: PropTypes.number.isRequired,
  changeItemCallback: PropTypes.func.isRequired,
};

export default Questionnaire;
