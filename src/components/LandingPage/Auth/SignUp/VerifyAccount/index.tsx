import React, { useState } from "react";
import Navbar from "../../ReusbaleNavbar";
import VerifiedAccount from "./VerifiedAccount";

import classes from "./VerifyAccount.module.css";

const VerifyAccount = () => {
  const [code, setCode] = useState("");
  const [counter, setCounter] = useState(60);
  const [verified, setVerified] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCode(value);
  };

  const handleResendCode = () => {
    setCounter(60);
  };

  const handleVerifyAccountClick = () => {
    setVerified(true);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      {verified ? (
        <VerifiedAccount />
      ) : (
        <div className={classes.main_container}>
          <div className={classes.title_container}>
            <p className={classes.title_container_title}>Verify Your Email</p>
            <p className={classes.title_container_content}>
              We sent a six digit confirmation code to
              akbaralinabiev14@gmail.com. Please enter it below to confirm your
              email address.
            </p>
          </div>
          <div className={classes.input_container}>
            <input
              type="text"
              className={classes.input_style}
              placeholder="Enter 4-digit code"
              value={code}
              onChange={handleInputChange}
            />
            <div className={classes.counter}>
              {counter > 0
                ? `Resend code in ${counter}s`
                : "Didn't receive code?"}
            </div>
            {counter <= 0 && (
              <div className={classes.resend_code} onClick={handleResendCode}>
                Resend code
              </div>
            )}
          </div>
          <div className={classes.buttons_container}>
            <button
              className={classes.signin_button}
              onClick={handleVerifyAccountClick}
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyAccount;
