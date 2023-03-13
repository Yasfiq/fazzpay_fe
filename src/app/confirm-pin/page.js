import FooterLarge from "@/components/organisms/FooterLarge";
import Link from "next/link";
import FormPin from "./FormPin";

const ConfirmPin = () => {
  return (
    <>
      <div className="w-1/2 container pt-20 h-screen font-nunito-sans">
        <h1 className="text-center mb-10 text-4xl text-primary font-bold">
          Please Input Your PIN
        </h1>
        <FormPin />
        <Link href="/change-pin">
          <p className="text-xl text-primary mt-8">Forgot your PIN ?</p>
        </Link>
      </div>
      <div className="absolute bottom-0">
        <FooterLarge />
      </div>
    </>
  );
};

export default ConfirmPin;
