import { Form } from "@remix-run/react";
import Button from "./Button";

const ScanQR = () => {
  return (
    <div className="flex flex-col text-white mt-10 gap-8">
      <h1 className="text-3xl">Scan QR Code</h1>
      <p className="w-[25rem] text-xl font-light">
        Scan the QR code located on top of the lucky beer cover
      </p>

      <Form className="flex flex-col items-center">
        {/* QR code scanner */}
        <div className="flex bg-[#D9D9D9] h-[10rem] w-[10rem]"></div>

        <div className="flex mt-8">
          <Button text="Scan QR Code" />
        </div>
      </Form>
    </div>
  );
};
export default ScanQR;
