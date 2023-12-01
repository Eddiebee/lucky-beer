import LinkButton from "./Button";

const ProductAuth = () => {
  return (
    <section>
      <h1 className="text-white font-bold text-4xl tracking-wide mt-20 p-5">
        Product <span className="text-yellow">Authentication</span> Scan
      </h1>
      <div className="flex gap-5 justify-center mt-10">
        <div>
          <LinkButton text="Input Product No" to="/product_no" />
        </div>
        <div>
          <LinkButton text="Scan QR Code" to="/scan" />
        </div>
      </div>
    </section>
  );
};
export default ProductAuth;
