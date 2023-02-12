import { AiOutlineArrowUp, AiOutlinePlus } from "react-icons/ai";

const Wallet = () => {
  return (
    <>
      <div className="bg-primary rounded-2xl p-10 text-white flex justify-between items-center">
        <div className="balance">
          <h2 className="text-3xl">Balance</h2>
          <h3 className="text-4xl my-4 font-semibold">Rp 120.000</h3>
          <p>+62 813-9387-7946</p>
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
      </div>
    </>
  );
};

export default Wallet;
