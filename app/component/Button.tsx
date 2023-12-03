import { Link } from "@remix-run/react";
import { ReactNode } from "react";

const Button = ({
  text,
  onClick,
  children,
}: {
  text: string;
  onClick?: () => void;
  children?: ReactNode;
}) => {
  return (
    <button
      className="flex justify-center text-white text-md bg-yellow rounded-md p-2 w-[11rem] tracking-wide font-normal hover:bg-transparent hover:border-yellow hover:border-2 hover:transition-all"
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

const LinkButton = ({
  to,
  text,
  onClick,
  children,
}: {
  to?: string;
  text: string;
  onClick?: () => void;
  children?: ReactNode;
}) => {
  return to ? (
    <Link to={to}>
      <Button text={text} onClick={onClick} children={children} />
    </Link>
  ) : (
    <Button text={text} onClick={onClick} children={children} />
  );
};

export default LinkButton;
