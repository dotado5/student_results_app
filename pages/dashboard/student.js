import React from "react";
import styles from "..//../styles/dashboards.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "@/feature/userSlice";

function student() {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.left_top}>
          <h2>Check Results</h2>
          <p>Name: {user.name}</p>
          <p>Matric number: {user.matric}</p>
          <p>Faculty: Technology</p>
          <p>Department: Computer Science and Engineering</p>
          <p>Level: 2</p>
        </div>
        <div className={styles.right_top}></div>
      </div>
      <div className={styles.bottom}>
        <h3>Harmattan Semester</h3>
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th className={styles.title}>Course Title</th>
              <th>Unit</th>
              <th>Tutorial</th>
              <th>Practical</th>
              <th>Test</th>
              <th>Exam</th>
              <th>Total</th>
              <th className={styles.remark}>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSC201</td>
              <td>Computer Programming 1</td>
              <td>2</td>
              <td>{user.tutorial}</td>
              <td>{user.practical}</td>
              <td>{user.test}</td>
              <td>{user.exam}</td>
              <td>{user.total}</td>
              <td style={{ fontSize: "20px", fontWeight: "500" }}>
                {user.feedback}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default student;
