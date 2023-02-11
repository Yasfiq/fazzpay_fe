import Link from "next/link";
import Teaser from "../register/Teaser";
import Banner from "./Banner";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <>
      <div className="w-screen h-screen font-nunito-sans grid grid-cols-12">
        <Banner />
        <div className="md:col-span-6 pt-16 col-span-12 container">
          <Teaser />
          <FormLogin />
          <p className="mt-8 text-center text-xl text-[#3A3D42CC]/80">
            Don't have an account? Let's{" "}
            <Link href="/auth/register">
              <span className="text-primary">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
