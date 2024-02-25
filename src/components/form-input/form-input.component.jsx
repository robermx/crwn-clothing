import { FormInputLabel, Input, Group } from "./form-input.styles";

const Forminput = (props) => {
  const { label, inputOptions } = props;
  const { value } = inputOptions ?? {};
  return (
    <Group>
      <Input {...inputOptions} />
      {label && <FormInputLabel value={value.length}>{label}</FormInputLabel>}
    </Group>
  );
};

export default Forminput;
