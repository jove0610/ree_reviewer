import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/navSubject.module.css';

const NavSubject = ({ changeSubjectCallback }) => {
  const [activeTab, setActiveTab] = useState(null);

  const setClassName = (tabIndex) => {
    if (tabIndex === activeTab) {
      return `${styles.button} ${styles.buttonActive}`;
    }
    return `${styles.button}`;
  };

  return (
    <section className={styles.navSubjectContainer}>
      <button
        className={setClassName(0)}
        type='button'
        onClick={() => {
          setActiveTab(0);
          changeSubjectCallback('EE');
        }}
      >
        EE
      </button>
      <button
        className={setClassName(1)}
        type='button'
        onClick={() => {
          setActiveTab(1);
          changeSubjectCallback('ESAS');
        }}
      >
        ESAS
      </button>
    </section>
  );
};

NavSubject.propTypes = {
  changeSubjectCallback: PropTypes.func.isRequired,
};

export default NavSubject;
