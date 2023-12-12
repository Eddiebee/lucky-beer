import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import BackButton from "~/component/BackButton";
import DataDict from "~/component/DataDict";
import { TResult } from "~/routes/result";

const BaseResult = ({
  RESULTERMS,
  RESULT,
}: {
  RESULTERMS: string[];
  RESULT: TResult;
}) => {
  return (
    <>
      <BackButton />
      <div className="absolute top-44 md:top-36 w-full text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-white">Product No ABC123 Results </h1>
          {/* result cnt */}
          <dl className="bg-yellow/40 max-w-[25rem] sm:flex-col md:w-[30rem] min-h-[25rem] my-7 p-5 text-white">
            {RESULTERMS.map((term: string, index: number) => (
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
export default BaseResult;
