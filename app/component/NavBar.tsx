import { Link } from "@remix-run/react";
import { useState } from "react";

const NavBar = ({ navItems }: { navItems: string[] }) => {
  const [hovered, setIsHovered] = useState(false);

  return (
    <nav className="container flex justify-between absolute top-0 w-full px-10 py-16 md:px-24 md:py-10 text-white">
      <header>
        <Link to="/">
          <h1
            className="text-lg transition-all"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={`${hovered ? "text-yellow" : ""}`}>Lucky</span>{" "}
            <span className={`${hovered ? "text-white" : "text-yellow"}`}>
              Beer
            </span>
          </h1>
        </Link>
      </header>
      {/* no need for these fellows for now */}
      {/* <ul className="flex gap-20">
        {navItems.map((navItem, index) => (
          <Link
            to={""}
            key={index}
            className="hover:text-yellow hover:transition-all"
          >
            {navItem}
          </Link>
        ))}
      </ul> */}
    </nav>
  );
};
export default NavBar;
