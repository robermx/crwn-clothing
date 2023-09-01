import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebas.utils";
import Forminput from "../form-input/form-input.component";
import { dataOptions, defaultValues } from "../../utils/common/catalogs";
import "./sing-up-form.styles.scss";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultValues);
  console.log(formFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const dataInputOptions = dataOptions(
    displayName,
    email,
    password,
    confirmPassword
  );

  const resertFormFields = () => {
    setFormFields(defaultValues);
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
      <h2>Bon't have an account?</h2>
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
