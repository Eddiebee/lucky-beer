import { Link } from "@remix-run/react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="text-white text-md bg-yellow rounded-md p-2 w-[11rem] tracking-wide font-normal hover:bg-transparent hover:border-yellow hover:border-2 hover:transition-all">
      {text}
    </button>
  );
};

const LinkButton = ({ to, text }: { to?: string; text: string }) => {
  return to ? (
    <Link to={to}>
      <Button text={text} />
    </Link>
  ) : (
    <Button text={text} />
  );
};

export default LinkButton;
