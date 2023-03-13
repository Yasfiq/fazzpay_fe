import { useState } from "react";
import FormPin from "./FormPin";
import Success from "./Success";

const Confirm = ({ amount, balance, notes, data }) => {
  const [active, setActive] = useState();
  const time = new Date();
  const [status, setStatus] = useState();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const showModal = () => {
    return (
      <>
        <div
          className={`fixed justify-center items-center h-screen top-0 bottom0 left-0 right-0 bg-black/30 ${
            active ? "flex" : "hidden"
          }`}
        >
          <div className="rounded-xl bg-white w-96 p-4">
            <FormPin
              amount={amount}
              balance={balance}
              receiver={data}
              notes={notes}
              time={time}
              setStatus={setStatus}
              setActive={setActive}
            />
          </div>
        </div>
      </>
    );
  };

  if (status === "OK") {
    return (
      <>
        <Success
          amount={amount}
          balance={balance}
          data={data}
          time={time}
          notes={notes}
        />
      </>
    );
  } else if (status === "BAD") {
  } else {
    return (
      <>
        {showModal()}
        <div className="col-span-9 h-max shadow-lg p-6 rounded-xl border max-h-screen">
          <h3 className="font-semibold text-xl mb-4">Transfer To</h3>
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
          <h3 className="text-xl mb-4">Details</h3>
          <DetailItem label="Amount" value={`Rp ${amount}`} />
          <DetailItem label="Balance Left" value={`Rp ${balance - amount}`} />
          <DetailItem
            label="Date & Time"
            value={`${
              months[time.getMonth()]
            } ${time.getDate()}, ${time.getFullYear()} - ${time.getHours()}.${time.getMinutes()}`}
          />
          <DetailItem label="Notes" value={notes} />
          <div className="flex justify-end">
            <button
              className="btn-primary mt-5"
              onClick={() => setActive(true)}
            >
              Continue
            </button>
          </div>
        </div>
      </>
    );
  }
};

const DetailItem = ({ label, value }) => {
  return (
    <>
      <div className="amount pb-3 border-b mb-3">
        <p>{label}</p>
        <p className="text-2xl">{value}</p>
      </div>
    </>
  );
};

export default Confirm;
