import { QrScanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import BackButton from "./BackButton";
import LinkButton from "./Button";

const Scanner = () => {
  const [scanResult, setScanResult] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <BackButton />
      <div className="w-full absolute top-32 mt-10 md:flex md:justify-center ">
        <div className="w-full md:w-[35rem] self-center p-5 backdrop-opacity-10 backdrop-invert bg-yellow/20">
          <QrScanner
            onDecode={(result) => setScanResult(result)}
            onError={(error) => setError(error?.message)}
          />
        </div>

        {scanResult === "https://lucky-beer.vercel.app/result" ? (
          <div className="p-5">
            {scanResult && (
              <LinkButton text="View scan result" to={scanResult} />
            )}{" "}
            {error && (
              <p className="text-yellow text-xl">
                oops! something went wrong somewhere - {error}
              </p>
            )}{" "}
          </div>
        ) : (
          <div className="p-5">
            <p className="text-yellow text-xl">
              Invalid scan output... please make sure it is a Lucky Beer QR
              code. Thanks!
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default Scanner;
