// import { useState, useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  // auth,
  // signWithGoogleRedirect,
  signWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebas.utils";

const SignIn = () => {
  // const [googleDataRedirect, setGoogleDataRedirect] = useState(null);
  // console.log(googleDataRedirect);

  // useEffect(() => {
  //   const getGoogleResponse = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       setGoogleDataRedirect(response.user);
  //     }
  //   };
  //   getGoogleResponse();
  // });

  const logGoogleUser = async () => {
    const { user } = await signWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>sign in google pooup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
