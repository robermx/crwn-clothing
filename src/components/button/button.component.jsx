import { BaseButton, GoogleSignButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (butonType = BUTTON_TYPE_CLASSES.base) => {
  switch (butonType) {
    case BUTTON_TYPE_CLASSES.base:
      return BaseButton;

    case BUTTON_TYPE_CLASSES.google:
      return GoogleSignButton;

    case BUTTON_TYPE_CLASSES.inverted:
      return InvertedButton;

    default:
      console.error(`${butonType} is not avalible`);
  }
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButtom = getButton(buttonType);
  return <CustomButtom {...otherProps}>{children}</CustomButtom>;
};

export default Button;
