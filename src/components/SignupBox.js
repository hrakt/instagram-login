import React from "react";
import styles from "./SingupBox.module.scss";

export default function SignupBox() {
  return (
    <div className={styles.box}>
      <p className={styles.paragraph}>
        Don't have an account? <a className={styles.link}>Sign up</a>
      </p>
    </div>
  );
}
