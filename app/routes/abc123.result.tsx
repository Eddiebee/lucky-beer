import BaseResult from "~/component/BaseResult";

const FULL_RESULT = {
  "date": "August 1, 2022",
  "recipe": "Pale Ale",
  "ingredients":
    "Malt; Maris Otter (Barrett’s Farm, Batch B3429, Organic)Hops; Cascade (Willmatte Valley, Batch H1021, sustainably sourced)Yeast; Safale US-05 Water",
  "composition": "Carbohydrate - 90% Alcohol - 8% Protein - 1.8% Fats - 0.2%",
  "brewing parameters":
    "Mash temp: 67C \nMash time: 60mins \nBoil Temp: 100C \nBoil Time: 90mins \nOriginal gravity: 1.056 \nFinal gravity: 1.012",
  "lab tests":
    "Viscosity: 1.7 centipoise \npH: 4.2 \nAlcohol content: 5.7% ABV \nNo microbiologocal contaminants detected \nSensory profile: citrusy, balanced bitterness",
  "packaging":
    "Bottling line: ABC Line 112 oz bottles, 1000 cases total \nCapper sensor timestamps: 08/02/22 07:35- 08/02/22 12:15",
  "shipping":
    "500 cases to distributor alpha (8/5/22, van 111 at -1C) 500 cases to distributor Beta (8/5/22, van 112 at -1C)",
  "retailer data":
    "200 Bottles scanned at liquormart 1180 bottles scanned at bottle shop 2",
};


const Abc123Result = () => {
  return (
    <>
      <BaseResult RESULT={FULL_RESULT} RESULTERMS={Object.keys(FULL_RESULT)} />
    </>
  );
};
export default Abc123Result;
