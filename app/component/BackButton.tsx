import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <ChevronLeftIcon
      className="absolute top-28 w-12 mx-7  md:mx-20 text-yellow hover:text-white hover:transition-all cursor-pointer"
      onClick={() => navigate(-1)}
    />
  );
};
export default BackButton;
