"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Chart from "./Chart";

const Cashflow = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://funpayz.herokuapp.com/api/v1/transaction/${
          JSON.parse(localStorage.getItem("@userLogin")).id
        }`
      )
      .then((res) => {
        const data = res.data.Data;
        let nominalIncome = 0;
        let nominalExpense = 0;
        data.map((item) => {
          if (item.type === "income") {
            nominalIncome += parseInt(item.nominal);
          } else if (item.type === "expense") {
            nominalExpense += parseInt(item.nominal);
          }
        });
        setIncome(nominalIncome);
        setExpense(nominalExpense);
      });
  }, []);

  return (
    <>
      <div className="col-span-7">
        <div className="cashflow flex justify-between mb-8">
          <div className="income space-y-3">
            <p className="text-2xl text-teal-500">
              <AiOutlineArrowDown />
            </p>
            <p>Income</p>
            <p className="text-xl">{income}</p>
          </div>
          <div className="expense space-y-3">
            <p className="text-2xl text-red-500">
              <AiOutlineArrowUp />
            </p>
            <p>Expense</p>
            <p className="text-xl">{expense}</p>
          </div>
        </div>
        <Chart />
      </div>
    </>
  );
};

export default Cashflow;
