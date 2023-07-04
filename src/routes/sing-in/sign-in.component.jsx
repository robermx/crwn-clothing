import {
  createUserDocumentFromAuth,
  signWithGooglePopup,
} from '../../utils/firebase/firebas.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>sign in google pooup</button>
    </div>
  );
};

export default SignIn;
