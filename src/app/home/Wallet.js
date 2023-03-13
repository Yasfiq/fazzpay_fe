import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlinePlus } from "react-icons/ai";

const Wallet = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://funpayz.herokuapp.com/api/v1/user/${
          JSON.parse(localStorage.getItem("@userLogin")).id
        }`
      )
      .then((res) => {
        setData(res.data.Data);
        console.log(res.data.Data);
      })
      .catch((err) => {
        console.log(err.response.data.Error);
      });
  }, []);

  return (
    <>
      <div className="bg-primary rounded-2xl p-10 text-white flex justify-between items-center">
        {data ? (
          <>
            <div className="balance">
              <h2 className="text-3xl">Balance</h2>
              <h3 className="text-4xl my-4 font-semibold">Rp {data.balance}</h3>
              <p>{data.phone_number}</p>
            </div>
            <div className="space-y-4 flex flex-col">
              <button className="py-5 px-10 text-xl bg-white/20 border-white border rounded-xl flex gap-x-5 items-center">
                <AiOutlineArrowUp />
                Transfer
              </button>
              <button className="py-5 px-10 text-xl bg-white/20 border-white border rounded-xl flex gap-x-5 items-center">
                <AiOutlinePlus />
                Top Up
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Wallet;
