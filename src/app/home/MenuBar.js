import { BsGrid } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlinePlus } from "react-icons/ai";

const MenuBar = ({ active, setActive }) => {
  return (
    <>
      <div className="col-span-3 py-6">
        <p
          className={`text-2xl flex gap-x-4 items-center mb-16 cursor-pointer hover:text-primary pl-5 border-l-4 ${
            active === "dashboard"
              ? "border-primary text-primary"
              : "border-white"
          }`}
          onClick={() => setActive("dashboard")}
        >
          <BsGrid />
          Dashboard
        </p>
        <p
          className={`text-2xl flex gap-x-4 items-center mb-16 cursor-pointer hover:text-primary pl-5 border-l-4 ${
            active === "transfer"
              ? "border-primary text-primary"
              : "border-white"
          }`}
          onClick={() => setActive("transfer")}
        >
          <AiOutlineArrowUp />
          Transfer
        </p>
        <p
          className={`text-2xl flex gap-x-4 items-center mb-16 cursor-pointer hover:text-primary pl-5 border-l-4 ${
            active === "topup" ? "border-primary text-primary" : "border-white"
          }`}
          onClick={() => setActive("topup")}
        >
          <AiOutlinePlus />
          Top Up
        </p>
      </div>
    </>
  );
};

export default MenuBar;
