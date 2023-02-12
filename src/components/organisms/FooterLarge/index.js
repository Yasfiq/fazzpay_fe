const FooterLarge = () => {
  return (
    <>
      <div className="bg-primary py-20 text-white w-screen">
        <div className="container divide-y-2 divide-white">
          <section className="footer-top mb-10">
            <h1 className="font-bold text-3xl">Fazzpay</h1>
            <p className="mt-8">
              Simplify financial needs and saving
              <br /> much time in banking needs with <br />
              one single app.
            </p>
          </section>
          <section className="footer-bottom pt-5 grid grid-cols-12">
            <p className="copyright col-span-8">
              2023 FazzPay. All right reserved.
            </p>
            <p className="col-span-2 text-end">+62 5637 8882 9901</p>
            <p className="col-span-2 text-end">contact@fazzpay.com</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default FooterLarge;
