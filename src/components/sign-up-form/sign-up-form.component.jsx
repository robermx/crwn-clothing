import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebas.utils";
import Forminput from "../form-input/form-input.component";
import {
  dataSignUpOptions,
  defaultSignUpValues,
} from "../../utils/common/catalogs";
import "./sign-up-form.styles.scss";
import ButtonComponent from "../button/button.component";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultSignUpValues);

  const { displayName, email, password, confirmPassword } = formFields;

  const dataInputOptions = dataSignUpOptions(
    displayName,
    email,
    password,
    confirmPassword
  );

  const resertFormFields = () => {
    setFormFields(defaultSignUpValues);
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

    if (password !== confirmPassword) {
      return alert("Password do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resertFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("The email already exist");
      }
      console.log("User creation encounted an error", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
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

        <ButtonComponent type="submit">Sign Up</ButtonComponent>
      </form>
    </div>
  );
};

export default SignUpForm;
