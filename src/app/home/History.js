"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const TransactionsHistory = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://funpayz.herokuapp.com/api/v1/transaction/${
          JSON.parse(localStorage.getItem("@userLogin")).id
        }`
      )
      .then((res) => {
        setData(res.data.Data);
      })
      .catch((err) => {
        console.log(err.response.data.Error);
      });
  }, []);

  return (
    <>
      <div className="col-span-5 border shadow-xl rounded-xl p-5 h-[25rem] overflow-y-scroll">
        <div className="header flex justify-between items-center mb-3">
          <h1 className="text-xl">Transaction History</h1>
          <p className="text-primary">See all</p>
        </div>
        {data?.map((item) => {
          return (
            <div
              className="grid items-center mb-5"
              style={{ gridTemplateColumns: "auto 1fr 1fr" }}
            >
              <div
                className="h-16 w-16 rounded-full bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url("https://res.cloudinary.com/dcf12mtca/image/upload/v1677939306/${item.subject_image}.webp")`,
                }}
              ></div>
              <div className="detail ml-3">
                <h3>{item.subject_name}</h3>
                <p className="text-xs">
                  {item.type === "income" ? "Accept" : "Transfer"}
                </p>
              </div>
              {item.type === "income" ? (
                <p className="text-teal-500 justify-self-end">
                  +Rp {item.nominal}
                </p>
              ) : (
                <p className="text-red-500 justify-self-end">
                  -Rp {item.nominal}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TransactionsHistory;
