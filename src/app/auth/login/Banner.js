const Banner = () => {
  return (
    <>
      <div className="col-span-6 overflow-x-hidden text-white bg-[url(/Images/auth-bg.png)] bg-cover bg-top bg-no-repeat container py-10 md:block hidden">
        <h1 className="font-bold text-3xl">Fazzpay</h1>
        <img
          src="/Images/mockup-mobile.png"
          alt="woman-business"
          className="mt-6 w-3/4 mx-auto object-cover object-center"
        />
        <h3
          className="font-bold text-6xl text-center -mt-5 backdrop-blur"
          style={{ textShadow: "0px 4px rgba(0,0,0,.3)" }}
        >
          App that Covering Banking Needs.
        </h3>
      </div>
    </>
  );
};

export default Banner;
