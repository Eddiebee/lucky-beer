import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import NavBar from "./component/NavBar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500&family=Libre+Baskerville:ital@1&family=Roboto:wght@300;400;500&display=swap",
  },
];

const NAVITEMS = ["Home", "About Us", "Stores"];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-main bg-hero-pattern bg-cover">
        {/* gradient overlay for body background */}
        <div className="h-[100vh] bg-gradient-to-b from-gradientO to-gradient1"></div>
        <NavBar navItems={NAVITEMS} />
        {/* go back icon */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
