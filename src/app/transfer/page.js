import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import MenuBar from "../home/MenuBar";

const Transfer = () => {
  return (
    <>
      <Header />
      <div className="container grid grid-cols-12 py-10">
        <MenuBar active="transfer" />
        <div className="col-span-9 h-max">
          <h1>INI TITID</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transfer;
