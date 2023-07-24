import React, { useState } from "react";
import styles from "../../../styles/dashboards.module.css";
import Sidebar from "./sidebar";

function admin() {
  const [matric, setMatric] = useState("");
  const [name, setName] = useState("");
  const [scores, setScores] = useState({
    tutorial: 0,
    practical: 0,
    test: 0,
    exam: 0,
  });
  const [total, setTotal] = useState(0);
  const [practicalChange, setPracticalChange] = useState(false);
  const [testChange, setTestChange] = useState(false);
  const [examChange, setExamChange] = useState(false);

  function update() {
    setTotal(
      parseInt(scores.exam, 10) +
        parseInt(scores.test, 10) +
        parseInt(scores.practical, 10) +
        parseInt(scores.tutorial, 10)
    );

    console.log(scores);

    if (practicalChange && testChange && examChange) {
      GeneralUpdate();
    } else if (practicalChange && testChange) {
      Practical_test_Update();
    } else if (practicalChange) {
      Practical_Update();
    } else {
      Tutorial_Update();
    }
  }

  const GeneralUpdate = async () => {
    const response = await fetch(
      "https://bsc-project-a36k.onrender.com/general-update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matric: matric,
          name: name,
          tutorial_score: scores.tutorial,
          practical_score: scores.practical,
          test_score: scores.test,
          exam_score: scores.exam,
          total: total,
        }),
      }
    );

    data = await response.json();
    console.log(data);
  };

  const Practical_test_Update = async () => {
    const response = await fetch("http://127.0.0.1:5000/pratical-test-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matric: matric,
        name: name,
        tutorial_score: scores.tutorial,
        practical_score: scores.practical,
        test_score: scores.test,
        exam_score: scores.exam,
        total: total,
      }),
    });

    data = await response.json();
    console.log(data);
  };

  const Practical_Update = async () => {
    const response = await fetch("http://127.0.0.1:5000/pratical-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matric: matric,
        name: name,
        tutorial_score: scores.tutorial,
        practical_score: scores.practical,
        test_score: scores.test,
        exam_score: scores.exam,
        total: total,
      }),
    });

    data = await response.json();
    console.log(data);
  };

  const Tutorial_Update = async () => {
    const response = await fetch("http://127.0.0.1:5000/tutorial-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matric: matric,
        name: name,
        tutorial_score: scores.tutorial,
        practical_score: scores.practical,
        test_score: scores.test,
        exam_score: scores.exam,
        total: total,
      }),
    });

    data = await response.json();
    console.log(data);
  };

  let current = "upload";

  return (
    <div className={styles.admin_main}>
      <Sidebar current={current} />
      <div className={styles.admin_cont}>
        <h1>Upload User Result</h1>
        <div className={styles.details}>
          <label htmlFor="name">Student's Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.details}>
          <label htmlFor="matric">Registration Number</label>
          <input
            type="text"
            id="matric"
            onChange={(e) => setMatric(e.target.value)}
          />
        </div>
        <div className={styles.details}>
          <label htmlFor="code">Course Code</label>
          <input type="text" id="code" />
        </div>
        <div className={styles.scores}>
          <p>Input Scores</p>
          <div>
            <input
              type="number"
              placeholder="Tutorial/Assignment"
              value={scores.tutorial}
              onChange={(e) =>
                setScores({ ...scores, tutorial: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Practical"
              value={scores.practical}
              onChange={(e) => {
                setPracticalChange(true);
                setScores({ ...scores, practical: e.target.value });
              }}
            />
            <input
              type="number"
              placeholder="Test"
              value={scores.test}
              onChange={(e) => {
                setTestChange(true);
                setScores({ ...scores, test: e.target.value });
              }}
            />
            <input
              type="number"
              placeholder="Exam"
              value={scores.exam}
              onChange={(e) => {
                setExamChange(true);
                setScores({ ...scores, exam: e.target.value });
              }}
            />
            <input type="number" placeholder="Total" value={total} />
          </div>
          <button onClick={update}>Confirm Score</button>
        </div>
      </div>
    </div>
  );
}

export default admin;
