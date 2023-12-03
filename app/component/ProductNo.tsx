import { Form } from "@remix-run/react";
import Button from "./Button";

const ProductNo = () => {
  return (
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

    <div className="flex flex-col text-white mt-10 gap-8">
      <h1 className="text-3xl">Input Product No</h1>
      <p className="w-[25rem] text-xl font-light ">
        Input the 6 digits product no located under the cover of lucky beer
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
              required
              placeholder="xxxxxxx"
              type="text"
              inputMode="numeric"
              className="p-1 w-[20rem] text-center outline-none tracking-wider bg-transparent border-yellow border-2 rounded-md mb-8"
            />
          </div>
          <div>
