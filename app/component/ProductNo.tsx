import { Form } from "@remix-run/react";
import Button from "./Button";

const ProductNo = () => {
  return (
    <div className="flex flex-col text-white mt-10 gap-8">
      <h1 className="text-3xl">Input Product No</h1>
      <p className="w-[25rem] text-xl font-light ">
        Input the 6 digit product number located on the body of Lucky Beer
      </p>
      <Form>
        <div>
          <input
            required
            placeholder="xxxxxxx"
            type="text"
            inputMode="numeric"
            className="p-1 w-[20rem] text-center outline-none tracking-wider bg-transparent border-yellow border-2 rounded-md mb-8"
          />
        </div>
        <div>
          <Button text="SCAN" />
        </div>
      </Form>
    </div>
  );
};
export default ProductNo;
