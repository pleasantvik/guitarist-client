import { HTMLAttributes } from "react";

const FieldInput = ({
  type,
  placeholder,
  name,
  value,
  ...rest
}: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className="px-4 py-4 outline-none border-[2px]  focus:border-primary-main border-primary-bcga rounded-lg"
      {...rest}
    />
  );
};

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
  value?: string;
}
export default FieldInput;
