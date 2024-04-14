import { HTMLAttributes, ReactNode } from "react";

const FieldLabel = ({ children, htmlFor, ...rest }: IFieldLabel) => {
  return (
    <label htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};

interface IFieldLabel extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
}
export default FieldLabel;
