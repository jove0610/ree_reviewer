import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({
  examSubject,
  changeSubjectCallback,
  changeSetCallback,
}) => {
  const renderYearButton = () =>
    examSubject.map((set) => (
      <button
        className='app__navSubject__yearBtnContainer__btn'
        key={set.textLabel}
        type='button'
        onClick={() => changeSetCallback(set)}
      >
        {set.btnLabel}
      </button>
    ));

  return (
    <section className='app__navSubject'>
      <div className='app__navSubject__subjBtnContainer'>
        <button
          className='app__navSubject__subjBtnContainer__btn'
          type='button'
          onClick={() => changeSubjectCallback('EE')}
        >
          EE
        </button>
        <button
          className='app__navSubject__subjBtnContainer__btn'
          type='button'
          onClick={() => changeSubjectCallback('ESAS')}
        >
          ESAS
        </button>
      </div>
      <div className='app__navSubject__yearBtnContainer'>
        {renderYearButton()}
      </div>
    </section>
  );
};

Navigation.propTypes = {
  examSubject: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeSubjectCallback: PropTypes.func.isRequired,
  changeSetCallback: PropTypes.func.isRequired,
};

export default Navigation;
