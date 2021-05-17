import React from "react";

export default function Login() {
  return (
    <div>
      <div className={styles.app}>
        <Phone />

        <div className={styles.right}>
          <LoginBox />
          <SignupBox />
        </div>
      </div>
    </div>
  );
}
