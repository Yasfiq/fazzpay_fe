const Footer = () => {
  return (
    <>
      <div className="w-screen bg-primary py-5 text-white">
        <div
          className="container grid gap-x-8 items-center"
          style={{ gridTemplateColumns: "1fr auto auto" }}
        >
          <h1 className="font-bold text-3xl">Fazzpay</h1>
          <p>+62 5637 8882 9901</p>
          <p>contact@fazzpay.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
