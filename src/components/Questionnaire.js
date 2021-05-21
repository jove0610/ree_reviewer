import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/questionnaire.module.css';

const Questionnaire = ({
  examYear,
  currentQuestion,
  changeQuestionCallback,
}) => {
  if (Object.keys(examYear).length === 0) {
    return null;
  }
  // highlightColor is assigned as the value of backgroundColor on inline style of the correct li element
  const [highlightColor, setHighlighColor] = useState('');
  const [toggleAnswerBtn, setToggleAnsBtn] = useState(false);
  const examJSON = examYear.json;
  const { answer } = examJSON[currentQuestion];
  // color used for highlighting answer
  const color = '#14F073';

  const getAnswerBtnClass = () => {
    if (toggleAnswerBtn) {
      return `${styles.button} ${styles.buttonActive}`;
    }
    return `${styles.button}`;
  };

  const onClickAns = () => {
    if (highlightColor) {
      setHighlighColor('');
    }
    if (!highlightColor) {
      setHighlighColor(color);
    }

    if (toggleAnswerBtn) {
      setToggleAnsBtn(false);
    }

    if (!toggleAnswerBtn) {
      setToggleAnsBtn(true);
    }
  };

  const onClickPrev = () => {
    if (currentQuestion === 0) {
      changeQuestionCallback(examJSON.length - 1);
      return;
    }
    changeQuestionCallback(currentQuestion - 1);
  };

  const onClickNext = () => {
    if (currentQuestion === examJSON.length - 1) {
      changeQuestionCallback(0);
      return;
    }
    changeQuestionCallback(currentQuestion + 1);
  };

  // returns list element(choices) that has inline style of bgColor on the correct answer
  const inspectedListElement = (optionX) => {
    if (answer === optionX) {
      return (
        <li className='choices' style={{ backgroundColor: highlightColor }}>
          {examJSON[currentQuestion][optionX]}
        </li>
      );
    }
    return <li className='choices'>{examJSON[currentQuestion][optionX]}</li>;
  };

  return (
    <div>
      <nav className={styles.buttonContainer}>
        <button className={styles.button} type='button' onClick={onClickPrev}>
          Prev
        </button>
        <button
          className={getAnswerBtnClass()}
          type='button'
          onClick={onClickAns}
        >
          Answer
        </button>
        <button className={styles.button} type='button' onClick={onClickNext}>
          Next
        </button>
      </nav>
      <main>
        <p className={styles.subHeading}>
          {`${currentQuestion + 1} / ${examJSON.length}`}
          &nbsp; &nbsp;
          {examYear.textLabel}
        </p>
        <p
          className={styles.questionnaire}
          dangerouslySetInnerHTML={{
            __html: examJSON[currentQuestion].questionnaire,
          }}
        />

        <ol className={styles.choices}>
          {inspectedListElement('optionA')}
          {inspectedListElement('optionB')}
          {inspectedListElement('optionC')}
          {inspectedListElement('optionD')}
        </ol>
      </main>
    </div>
  );
};

Questionnaire.propTypes = {
  examYear: PropTypes.objectOf(PropTypes.any).isRequired,
  currentQuestion: PropTypes.number.isRequired,
  changeQuestionCallback: PropTypes.func.isRequired,
};

export default Questionnaire;
