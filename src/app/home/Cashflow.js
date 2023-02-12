import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Chart from "./Chart";

const Cashflow = () => {
  return (
    <>
      <div className="col-span-7">
        <div className="cashflow flex justify-between mb-8">
          <div className="income space-y-3">
            <p className="text-2xl text-teal-500">
              <AiOutlineArrowDown />
            </p>
            <p>Income</p>
            <p className="text-xl">1.200.000</p>
          </div>
          <div className="expense space-y-3">
            <p className="text-2xl text-red-500">
              <AiOutlineArrowUp />
            </p>
            <p>Expense</p>
            <p className="text-xl">2.200.000</p>
          </div>
        </div>
        <Chart />
      </div>
    </>
  );
};

export default Cashflow;
