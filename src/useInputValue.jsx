import { useState } from "react";

const useInputValue = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    emailErrors: "",
    passwordErrors: "",
    confirmPasswordErrors: "",
    checkboxError: "",
  });
  const [checkbox, setCheckbox] = useState(false);

  const getEmail = (event) => {
    const emailValue = event.target.value;
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validEmail = regexp.test(emailValue);

    if (validEmail) {
      console.log(validEmail);
      setUserInfo({ ...userInfo, email: emailValue });
      setErrors({ ...errors, emailErrors: "" });
    } else {
      setErrors({ ...errors, emailErrors: "your email is invalid!" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const getPassword = (event) => {
    const passwordValue = event.target.value;
    const regexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;
    const validPassword = regexp.test(passwordValue);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: passwordValue });
      setErrors({ ...errors, passwordErrors: "" });
    } else {
      setErrors({ ...errors, passwordErrors: "your password invalid" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const getConfirmPassword = (event) => {
    const confirmPasswordValue = event.target.value;

    if (userInfo.password === confirmPasswordValue) {
      setUserInfo({ ...userInfo, confirmPassword: confirmPasswordValue });
      setErrors({ ...errors, confirmPasswordErrors: "" });
    } else {
      setErrors({
        ...errors,
        confirmPasswordErrors: "your password incorrect",
      });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

  const chackehandler = () => {
    
    setCheckbox(!checkbox)

  };

  return {
    userInfo,
    getEmail,
    getPassword,
    getConfirmPassword,
    chackehandler,
    checkbox,
    errors,
  };
};

export default useInputValue;
