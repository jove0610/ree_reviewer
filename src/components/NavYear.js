import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/navYear.module.css';

const NavYear = ({
  examSubject,
  changeYearCallback,
  activeTab,
  changeActiveYearTabCallback,
}) => {
  const setClassName = (tabIndex) => {
    if (tabIndex === activeTab) {
      return `${styles.button} ${styles.buttonActive}`;
    }
    return `${styles.button}`;
  };

  const renderYearTab = () =>
    examSubject.map((set, index) => (
      <button
        className={setClassName(index)}
        key={set.textLabel}
        type='button'
        onClick={() => {
          changeActiveYearTabCallback(index);
          changeYearCallback(set);
        }}
      >
        {set.btnLabel}
      </button>
    ));

  return <div className={styles.navYearContainer}>{renderYearTab()}</div>;
};

NavYear.propTypes = {
  examSubject: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeYearCallback: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
  changeActiveYearTabCallback: PropTypes.func.isRequired,
};

export default NavYear;
