import Validator from "./components/Validator";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const [password, setPassword] = useState("");

  const handleChange2 = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const [passwordC, setPasswordConfrim] = useState("");

  const handleChange3 = (event) => {
    event.preventDefault();
    setPasswordConfrim(event.target.value);
  };

  let [validate, setValidate] = useState("");

  const handleChange4 = (event) => {
    event.preventDefault();
    setValidate(event.target.value);
  };

  const validatePassword = () => {
    if (password === passwordC) {
      validate = true;
      alert(`Welcome`);
    } else {
      validate = false;
      alert("Passwords don't match.");
    }
  };
  return (
    <Validator
      handleChange={handleChange}
      handleChange1={handleChange2}
      handleChange2={handleChange3}
      handleChange3={handleChange4}
      validatePassword={validatePassword}
      username={username}
      password={password}
      passwordC={passwordC}
      validate={validate}
    />
  );
};

export default App;
