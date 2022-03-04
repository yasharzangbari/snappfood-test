import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {}

const Input = (props: Props) => {
  return <input className={props.className} {...props} />;
};

export default Input;
