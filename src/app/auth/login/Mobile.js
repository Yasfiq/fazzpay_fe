import Link from "next/link";
import FormLogin from "./FormLogin";

const MobileLogin = () => {
  return (
    <>
      <>
        <div className="md:hidden pt-6 h-auto">
          <h1 className="font-bold text-3xl text-primary text-center">
            Fazzpay
          </h1>
          <div className="container border-t-4 border-x-4 rounded-[15%] mt-10 pt-10">
            <h2 className="text-3xl text-center mb-5">Login</h2>
            <p className="text-center text-gray-500 mb-10">
              Login to your existing account to access all the features in
              FazzPay.
            </p>
            <FormLogin />
          </div>
          <p className="mt-8 text-center text-xl text-[#3A3D42CC]/80">
            Don't have an account? Let's{" "}
            <Link href="/auth/register">
              <span className="text-primary">Sign Up</span>
            </Link>
          </p>
        </div>
      </>
    </>
  );
};

export default MobileLogin;
