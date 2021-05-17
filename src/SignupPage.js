import React from "react";
import Signup from "./components/Signup/Signup";
import styles from "./styles.module.scss";

export default function SignupPage() {
  return (
    <div className={styles.app}>
      <div className={styles.right}>
        <Signup />
      </div>
    </div>
  );
}
