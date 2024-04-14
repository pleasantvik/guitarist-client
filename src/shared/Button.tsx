import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

const WavesButton = (props: IButtonProps) => {
  let template: ReactNode;
  switch (props.type) {
    case "default":
      template = (
        <Link
          className={
            !props.altClass
              ? "link_default cursor-pointer uppercase p-2 inline-block bg-[#e1ddc3]"
              : props.altClass
          }
          to={props.linkTo}
          style={{
            ...props.style,
          }}
        >
          {props.title}
        </Link>
      );
      break;

    default:
      break;
  }

  return template;
};

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  altClass?: string;
  linkTo: string;
  title: string;
  type: string;
}
export default WavesButton;
