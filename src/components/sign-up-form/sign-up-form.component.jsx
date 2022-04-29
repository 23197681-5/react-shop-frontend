import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-form">
      <h1>Sign Up</h1>
      <form onSubmit={""}>
        <label>Display Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="displayName"
          required
        ></input>

        <label>E-mail</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          required
        ></input>

        <label>Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          required
        ></input>

        <label>Confirm Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          required
        ></input>
        <button type="submit">Sign-up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
