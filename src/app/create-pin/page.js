import Banner from "../auth/login/Banner";
import FormHead from "./FormHead";
import FormPin from "./FormPin";

const CreatePin = () => {
  return (
    <>
      <div className="w-screen h-screen font-nunito-sans grid grid-cols-12">
        <Banner />
        <div className="md:col-span-6 pt-16 col-span-12 container">
          <FormHead />
          <FormPin />
        </div>
      </div>
    </>
  );
};

export default CreatePin;
