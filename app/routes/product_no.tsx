import BackButton from "~/component/BackButton";
import ProductNo from "~/component/ProductNo";

const ProductNumber = () => {
  return (
    <>
      <BackButton />
      <div className="flex absolute top-40 justify-center w-full text-center">
        <ProductNo />
      </div>
    </>
  );
};
export default ProductNumber;
