export const defaultValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const dataOptions = (v1, v2, v3, v4) => [
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
