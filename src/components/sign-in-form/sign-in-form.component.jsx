import { useState } from "react";
import {
  signWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebas.utils";
import Forminput from "../form-input/form-input.component";
import {
  dataSignInOptions,
  defaultSignInValues,
} from "../../utils/common/catalogs";
import "./sign-in-form.styles.scss";
import ButtonComponent from "../button/button.component";

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultSignInValues);
  const { email, password } = formFields;

  const dataInputOptions = dataSignInOptions(email, password);

  const resertFormFields = () => {
    setFormFields(defaultSignInValues);
  };

  const signInWithGoogle = async () => {
    try {
      await signWithGooglePopup();
    } catch (error) {
      switch (error.code) {
        case "auth/popup-closed-by-user":
          alert("You closed the popup window");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resertFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user asociated with this email ");
          break;
        default:
          console.log(error);
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Aleaady have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        {dataInputOptions.map((dataInput) => (
          <Forminput
            key={dataInput.id}
            label={dataInput.label}
            inputOptions={{
              type: dataInput.type,
              onChange: handleChange,
              name: dataInput.name,
              value: dataInput.value,
            }}
          />
        ))}
        <div className="buttons-container">
          <ButtonComponent type="submit">Sign In</ButtonComponent>
          <ButtonComponent
            onClick={signInWithGoogle}
            buttonType={"google"}
            type="button"
          >
            Google Sign in
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;