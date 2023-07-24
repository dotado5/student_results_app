import React from "react";
import styles from "../../../styles/dashboards.module.css";
import Link from "next/link";

function Sidebar(props) {
  return (
    <div className={styles.sidebar}>
      <Link
        href="/dashboard/admin/create"
        className={props.current === "create" ? styles.active : ""}
      >
        <span>Create</span>
      </Link>
      <Link
        href="/dashboard/admin/upload"
        className={props.current === "upload" ? styles.active : ""}
      >
        <span>Upload</span>
      </Link>
    </div>
  );
}

export default Sidebar;
