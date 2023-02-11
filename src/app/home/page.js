import Header from "@/components/organisms/Header";
import MenuBar from "./MenuBar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container grid grid-cols-12 py-10">
        <MenuBar />
      </div>
    </>
  );
};

export default Home;
