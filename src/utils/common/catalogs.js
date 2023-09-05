export const defaultSignUpValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const defaultSignInValues = {
  email: "",
  password: "",
};

export const dataSignUpOptions = (v1, v2, v3, v4) => [
  {
    id: 1,
    label: "Display Name",
    type: "text",
    name: "displayName",
    value: v1,
  },
  { id: 2, label: "Email", type: "email", name: "email", value: v2 },
  { id: 3, label: "Password", type: "password", name: "password", value: v3 },
  {
    id: 4,
    label: "Confirm Pasword",
    type: "password",
    name: "confirmPassword",
    value: v4,
  },
];

export const dataSignInOptions = (v1, v2) => [
  { id: 2, label: "Email", type: "email", name: "email", value: v1 },
  { id: 3, label: "Password", type: "password", name: "password", value: v2 },
];
