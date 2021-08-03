import React, { useState } from "react";

import PublicQuiz from "./PublicQuiz";

import styles from "../css/app.module.css";

const App = () => {
  const [activeTab, setActiveTab] = useState({
    name: "", // to show which quiz window to display
    index: null, // to toggle highlight of buttons
  });

  const setButtonClass = (tabIndex) => {
    if (tabIndex === activeTab.index) {
      return `${styles.button} ${styles.buttonActive}`;
    }
    return `${styles.button}`;
  };

  const onClick = (e) => {
    setActiveTab({
      name: e.target.name,
      index: e.target.getAttribute("datatab"),
    });
  };

  const renderMainApp = () => {
    if (activeTab.name === "EE" || activeTab.name === "ESAS") {
      return <PublicQuiz activeSubject={activeTab.name} />;
    }
    return null;
  };

  return (
    <>
      <header>
        <h1 className={styles.title}>REE Reviewer</h1>
      </header>
      <nav className={styles.navSubject}>
        <button
          className={setButtonClass("0")}
          type="button"
          datatab="0"
          name="EE"
          onClick={onClick}
        >
          EE
        </button>
        <button
          className={setButtonClass("1")}
          type="button"
          datatab="1"
          name="ESAS"
          onClick={onClick}
        >
          ESAS
        </button>
      </nav>
      {renderMainApp()}
    </>
  );
};

export default App;
