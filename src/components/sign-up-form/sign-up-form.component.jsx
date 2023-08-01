import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebas.utils";

const defaultValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultValues);
  console.log(formFields);

  const { displayName, email, password, confirmPassword } = formFields;

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
