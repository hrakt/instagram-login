import React from "react";
import LoginBox from "./components/LoginBox/LoginBox";
import SignupBox from "./components/SignupBox";
import Phone from "./components/Phone/Phone";
import styles from "./styles.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.app}>
      <Phone />

      <div className={styles.right}>
        <LoginBox />
        <SignupBox />
      </div>
    </div>
  );
}
