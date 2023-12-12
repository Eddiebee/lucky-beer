import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import BackButton from "~/component/BackButton";
import BaseResult from "~/component/BaseResult";
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

export type TResult = {
  date: string;
  recipe: string;
  ingredients: string;
  composition: string;
  shipping: string;
  retailerData: string;
};

const RESULTERMS = Object.keys(RESULT);

const Result = () => {
  return (
    <>
      <BaseResult RESULT={RESULT} RESULTERMS={RESULTERMS} />
    </>
  );
};
export default Result;
