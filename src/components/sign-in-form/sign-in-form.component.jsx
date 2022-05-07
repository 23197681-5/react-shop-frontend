import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(formFields);
    const { email, password } = formFields;
    try {
      console.log("reseting 2");
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log("reseting 1");
      // await createUserDocumentFromAuth(user, { displayName });
      console.log("reseting");
      resetFormFields();
      document.getElementByClassName("sign-up-form").reset();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        console.log(error.message);
      }
    }
  };

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-ip-form sing-ip-container">
      <h2>Already have an account?</h2>
      <h1>Sign in with email and password</h1>
      <form>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          required
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          required
        ></FormInput>

        <Button type="action" onClick={handleSubmit}>
          Sign-in
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
