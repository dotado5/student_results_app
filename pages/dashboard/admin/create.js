import React, { useState } from "react";
import styles from "../../../styles/dashboards.module.css";
import Sidebar from "./sidebar";
import axios from "axios";

export default function createAccount() {
  const [matric, setMatric] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function Create() {
    const response = await fetch(
      "https://bsc-project-a36k.onrender.com/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matric: matric,
          name: name,
          password: password,
        }),
      }
    )
      .then((response) => {
        console.log(response), alert("user created");
      })
      .catch((err) => console.log(err));
  }

  let current = "create";

  return (
    <div className={styles.admin_main}>
      <Sidebar current={current} />
      <div className={styles.admin_cont}>
        <h1>Create User</h1>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.scores}>
          <button onClick={Create}>Confirm Score</button>
        </div>
      </div>
    </div>
  );
}
