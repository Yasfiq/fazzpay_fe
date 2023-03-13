"use client";
import { BsCheckCircleFill, BsGrid } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../create-pin/confirm-pin.module.css";
import axios from "axios";

const MenuBar = ({ active }) => {
  const navigate = useRouter();
  const [modal, setModal] = useState();
  const [topup, setTopup] = useState(0);
  const [status, setStatus] = useState();

  const handleTopup = (e) => {
    const data = new URLSearchParams();
    data.append("nominal", topup);
    axios
      .post(
        `https://funpayz.herokuapp.com/api/v1/transaction/topup/${
          JSON.parse(localStorage.getItem("@userLogin")).id
        }`,
        data
      )
      .then((res) => {
        setStatus(res.data.Data);
      })
      .catch((err) => {
        console.log(err.response.data.Error);
      });
  };

  const showModal = () => {
    return (
      <>
        <div
          className={`fixed h-screen top- 0 bottom-0 left-0 right-0 bg-black/30 z-50 justify-center items-center ${
            modal ? "flex" : "hidden"
          }`}
        >
          <div className="rounded-xl bg-white w-[30%] p-6">
            {status === "Topup Success!" ? (
              <>
                <div className="flex flex-col items-center mt-8 mb-5">
                  <p className="text-4xl text-teal-500 mb-5">
                    <BsCheckCircleFill />
                  </p>
                  <p className="text-xl font-bold">Transfer Success</p>
                </div>
                <button
                  className="btn-primary mt-5"
                  onClick={() => setStatus(false)}
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <h3 className="text-xl">Topup</h3>
                  <p
                    className="font-bold text-2xl text-gray-400 cursor-pointer"
                    onClick={() => setModal(false)}
                  >
                    X
                  </p>
                </div>
                <p className="my-5 text-gray-400">
                  Enter the amount of money, and click submit
                </p>
                <input
                  type="number"
                  placeholder="0.00"
                  onChange={(e) => setTopup(e.target.value)}
                  className={`w-full rounded-xl py-3 text-center focus:outline-none text-4xl text-primary ${styles["input-number"]}`}
                />
                {topup == 0 || topup.length === 0 ? (
                  <button className="mt-6 btn-disabled block mx-auto">
                    Submit
                  </button>
                ) : (
                  <button
                    className="mt-6 btn-primary block mx-auto"
                    onClick={(e) => handleTopup(e)}
                  >
                    Submit
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {showModal()}
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
          onClick={() => setModal(true)}
        >
          <AiOutlinePlus />
          Top Up
        </p>
      </div>
    </>
  );
};

export default MenuBar;
