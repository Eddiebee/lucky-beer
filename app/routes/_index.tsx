import type { MetaFunction } from "@remix-run/node";
import ProductAuth from "~/component/ProductAuth";

export const meta: MetaFunction = () => {
  return [
    { title: "Lucky Beer" },
    { name: "description", content: "Lucky Beer Project" },
  ];
};

export default function Index() {
  return (
    <div className="flex absolute top-40 justify-center w-full text-center">
      <ProductAuth />
    </div>
  );
}
