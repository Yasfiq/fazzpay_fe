"use client";
import MenuBar from "@/app/home/MenuBar";
import TextInput1 from "@/components/atoms/Text Input 1";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import styles from "../../create-pin/confirm-pin.module.css";
import Confirm from "./Confirm";

const inputAmount = () => {
  const [data, setData] = useState(false);
  const id = usePathname().split("/")[2];
  const [balance, setBalance] = useState();
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    // console.log(
    //   `${days[time.getDay()]}, ${
    //     time.getMonth() + 1
    //   } ${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    // );
    axios
      .get(`https://funpayz.herokuapp.com/api/v1/user/${id}`)
      .then((res) => {
        setData(res.data.Data);
      })
      .catch((err) => {
        console.log(err.response.data.Error);
      });
    axios
      .get(
        `https://funpayz.herokuapp.com/api/v1/user/${
          JSON.parse(localStorage.getItem("@userLogin")).id
        }`
      )
      .then((res) => {
        setBalance(res.data.Data.balance);
      })
      .catch((err) => {
        console.log(err.response.data.Error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container grid grid-cols-12 py-10">
        <MenuBar active="transfer" />
        {confirm ? (
          <>
            <Confirm
              data={data}
              amount={amount}
              balance={balance}
              notes={notes}
            />
          </>
        ) : (
          <div className="col-span-9 h-max shadow-lg p-6 rounded-xl border max-h-screen">
            <h3 className="font-semibold text-xl mb-4">Transfer Money</h3>
            {data ? (
              <>
                <div className="flex items-center mb-5">
                  <div
                    className="h-16 w-16 rounded-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("https://res.cloudinary.com/dcf12mtca/image/upload/v1677939306/${data.profile_image}.webp")`,
                    }}
                  ></div>
                  <div className="detail ml-3">
                    <h3>{data.username}</h3>
                    <p className="text-xs">{data.phone_number}</p>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            <hr className="border-t-2 mb-5" />
            <p className="text-gray-400 text-center">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <input
              type="number"
              placeholder="0.00"
              value={amount !== 0 && amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className={`w-full rounded-xl py-3 text-center focus:outline-none text-4xl text-primary ${styles["input-number"]}`}
            />
            <h3 className="font-semibold mb-4 text-center my-5">
              Rp {balance} Available
            </h3>
            <TextInput1
              placeholder="Add some notes"
              icons={<BiPencil />}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="flex justify-center">
              {parseInt(balance) < parseInt(amount) ||
              amount === 0 ||
              !amount ? (
                <button className="btn-disabled mt-5">Continue</button>
              ) : (
                <button
                  className="btn-primary mt-5"
                  onClick={() => setConfirm(true)}
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default inputAmount;
