import Link from "next/link";
import Banner from "./Banner";
import FormRegister from "./FormRegister";
import MobileRegister from "./Mobile";
import Teaser from "./Teaser";

const Register = () => {
  return (
    <>
      <MobileRegister />
      <div className="w-screen h-screen font-nunito-sans grid-cols-12 hidden md:grid">
        <Banner />
        <div className="md:col-span-6 pt-16 col-span-12 container">
          <Teaser />
          <FormRegister />
          <p className="mt-8 text-center text-xl text-[#3A3D42CC]/80">
            Already have an account? Let's{" "}
            <Link href="/auth/login">
              <span className="text-primary">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
