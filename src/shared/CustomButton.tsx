import { FC, HTMLAttributes, ReactNode } from "react";

const CustomButton: FC<ButtonProps> = ({
  children,
  className,
  type,
  disabled,
  onClick,
  variant,
  ...rest
}) => {
  // console.log(disabled);
  const variantClass = {
    contained: "!text-white !bg-primary-main border",
    outline: "text-primary-main border border-primary-main bg-transparent",
  };
  //   const variantClass = {
  //     contained: "!text-white !bg-primary-main border",
  //     containedRed: "!text-white !bg-danger-accent border",
  //     outlined: "!bg-white !text-primary !border-primary border",
  //     outlineGray: "!border-dark-muted !text-dark-muted border",
  //     outlineRed: "!border-danger-accent !text-danger-accent border",
  //     outlineRedNoBorder: " !text-danger-accent border",
  //     rounded:
  //       "px-2 py-1 md:px-3 md:py-2 text-sm inline-block  !rounded-full bg-primary font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-green-500 focus:bg-green-500 focus:outline-none focus:ring focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed text-white",
  //     unstyle: "py-3 px-[7.5px]",
  //   };

  const classes =
    variant === "contained"
      ? variantClass.contained
      : variant === "outline"
      ? variantClass.outline
      : "";
  //   const classes =
  //     variant === "contained"
  //       ? variantClass.contained
  //       : variant === "outlineRedNoBorder"
  //       ? variantClass.outlineRedNoBorder
  //       : variant === "containedRed"
  //       ? variantClass.containedRed
  //       : variant === "outlineRed"
  //       ? variantClass.outlineRed
  //       : variant === "outline"
  //       ? variantClass.outlined
  //       : variant === "rounded"
  //       ? variantClass.rounded
  //       : variant === "unstyle"
  //       ? variantClass.unstyle
  //       : variantClass.outlineGray;
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      disabled={disabled}
      className={`flex  items-center justify-center rounded-md text-base px-4 py-2 font-semibold capitalize leading-4 ${className} ${classes}`}
      {...rest}
    >
      {children}
    </button>
  );
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  type?: "button" | "submit";
  variant?:
    | "contained"
    | "containedRed"
    | "outline"
    | "outlineGray"
    | "rounded"
    | "unstyle"
    | "outlineRedNoBorder"
    | "outlineRed";
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default CustomButton;

CustomButton.defaultProps = {
  variant: "contained",
};
