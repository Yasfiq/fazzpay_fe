"use client";
import { useState } from "react";

const TransactionsHistory = () => {
  const [data, setData] = useState([
    {
      subject: "Samuel Suhi",
      purpose: "Accept",
      nominal: 50000,
      tipe: "income",
    },
    {
      subject: "Albert Suhi",
      purpose: "Transfer",
      nominal: 149000,
      tipe: "expense",
    },
  ]);

  return (
    <>
      <div className="col-span-5 border shadow-xl rounded-xl p-5">
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
              <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
              <div className="detail ml-3">
                <h3>{item.subject}</h3>
                <p className="text-xs">{item.purpose}</p>
              </div>
              {item.tipe === "income" ? (
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
