import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";

const Success = ({ data, amount, balance, time, notes }) => {
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

  return (
    <>
      <div className="col-span-9 h-max shadow-lg p-6 rounded-xl border max-h-screen">
        <div className="flex flex-col items-center mt-8 mb-5">
          <p className="text-4xl text-teal-500 mb-5">
            <BsCheckCircleFill />
          </p>
          <p className="text-xl font-bold">Transfer Success</p>
        </div>
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
        <hr className="border-t-2 mb-5" />
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
        <Link href="/home">
          <button className="btn-primary mt-4">Back to home</button>
        </Link>
      </div>
    </>
  );
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

export default Success;
