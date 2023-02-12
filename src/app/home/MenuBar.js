"use client";
import { BsGrid } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";

const MenuBar = ({ active }) => {
  const navigate = useRouter();

  return (
    <>
      <div className="col-span-3 py-6">
        <p
          className={`text-2xl flex gap-x-4 items-center mb-16 cursor-pointer hover:text-primary pl-5 border-l-4 ${
            active === "dashboard"
              ? "border-primary text-primary"
              : "border-white"
          }`}
          onClick={() => navigate.push("/home")}
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
          onClick={() => navigate.push("/transfer")}
        >
          <AiOutlineArrowUp />
          Transfer
        </p>
        <p
          className={`text-2xl flex gap-x-4 items-center mb-16 cursor-pointer hover:text-primary pl-5 border-l-4 ${
            active === "topup" ? "border-primary text-primary" : "border-white"
          }`}
          onClick={() => navigate.push("/topup")}
        >
          <AiOutlinePlus />
          Top Up
        </p>
      </div>
    </>
  );
};

export default MenuBar;
