import { useState } from "react";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;
    try {
      await signInUserWithEmailAndPassword(email, password);

      resetFormFields();
      document.getElementByClassName("sign-up-form").reset();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
      }
    }
  };

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  return (
    <>
      <SignInContainer>
        <h3>Already have an account?</h3>
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
          <ButtonsContainer>
            <Button type="action" onClick={handleSubmit}>
              Sign-in
            </Button>

            <Button
              type="action"
              buttonType={BUTTON_TYPE_CLASSES.google}
              onClick={SignInWithGoogle()}
            >
              Google sign-in
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    </>
  );
};

export default SignInForm;
