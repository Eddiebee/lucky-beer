import BackButton from "~/component/BackButton";
import ScanQR from "~/component/ScanQR";

const Scan = () => {
  return (
    <>
      <BackButton />
      <div className="flex absolute top-40 justify-center w-full text-center">
        <ScanQR />
      </div>
    </>
  );
};
export default Scan;
