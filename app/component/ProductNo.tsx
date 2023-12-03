import {  useNavigate } from "@remix-run/react";
import Button from "./Button";
import { useState } from "react";

const ProductNo = () => {
  // validate that the input corresponds to ABC123
  const [productNo, setProductNo] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const validateProductNo = (productNo: string) => {
    if (productNo.toLowerCase() === "abc123") {
      navigate("/result");
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-col text-white mt-10 gap-8">
      <h1 className="text-3xl">Input Product No</h1>
      <p className="w-[25rem] text-xl font-light ">
        Input the 6 digit product number located on the body of Lucky Beer
      </p>
      <div>
        {isError && (
          <p className="text-yellow text-lg p-5 ">Invalid product number</p>
        )}
        <div className="flex flex-col items-center self-center">
          <div>
            <input
              value={productNo}
              onChange={(e) => setProductNo(e.target.value)}
              required
              placeholder="xxxxxxx"
              type="text"
              inputMode="numeric"
              className="p-1 w-[20rem] text-center outline-none tracking-wider bg-transparent border-yellow border-2 rounded-md mb-8"
            />
          </div>
          <div>
            <Button text="SCAN" onClick={() => validateProductNo(productNo)} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductNo;
