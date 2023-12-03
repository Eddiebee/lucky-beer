import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import BackButton from "~/component/BackButton";
import DataDict from "~/component/DataDict";

const RESULT = {
  date: "August 1, 2022",
  recipe: "Pale Ale",
  ingredients:
    "Malt; Maris Otter (Barrett’s Farm, Batch B3429, Organic)Hops; Cascade (Willmatte Valley, Batch H1021, sustainably sourced)Yeast; Safale US-05 Water",
  composition: "Carbohydrate - 90% Alcohol - 8% Protein - 1.8% Fats - 0.2%",
  shipping:
    "500 cases to distributor alpha (8/5/22, van 111 at -1C) 500 cases to distributor Beta (8/5/22, van 112 at -1C)",
  retailerData:
    "200 Bottles scanned at liquormart 1180 bottles scanned at bottle shop 2",
};

const RESULTERMS = Object.keys(RESULT);

const Result = () => {
  return (
    <>
      <BackButton />
      <div className="absolute top-44 md:top-36 w-full text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-white">Product No ABC123 Results </h1>
          {/* result cnt */}
          <dl className="bg-yellow/40 max-w-[25rem] sm:flex-col md:w-[30rem] min-h-[25rem] my-7 p-5 text-white">
            {RESULTERMS.map((term: string, index) => (
              <DataDict key={index} dt={term} dd={RESULT[term]} />
            ))}
          </dl>

          {/* verification badge */}
          <div className="flex items-center text-white mb-3">
            <CheckBadgeIcon className="w-16" />
            <p className="text-xl font-normal">ORIGINAL</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Result;
