import React from "react";
import styles from "./Input.module.scss";

export default function Input({ set, text }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {/* <span className={styles.placeholder} class="_9nyy2">
        {text}
      </span> */}
        <input
          onChange={(e) => set(e.target.value)}
          placeholder={text}
          label="Phone number, username, or email"
          type="text"
          className={styles.input}
        />
      </label>
    </div>
  );
}
