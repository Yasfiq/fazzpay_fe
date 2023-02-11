"use client";
import Avatar from "@/components/atoms/Avatar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Header = () => {
  const navigate = useRouter();
  const [data, setData] = useState([
    {
      notes: "Accept from Joshua Lee",
      nominal: 220000,
      tipe: "up",
    },
    {
      notes: "Accept from Joshua Lee",
      nominal: 1000000,
      tipe: "up",
    },
    {
      notes: "Transfer to Joshua Lee",
      nominal: 220000,
      tipe: "down",
    },
  ]);

  useEffect(() => {
    if (!localStorage.getItem("@userLogin")) {
      navigate.push("/auth/login");
    }
    if (localStorage.getItem("@userLogin")) {
      if (!JSON.parse(localStorage.getItem("@userLogin")).activePin) {
        navigate.push("/confirm-pin");
      }
    }
  }, []);

  return (
    <>
      <header className="w-screen shadow-md">
        <nav className="container py-6 flex justify-between items-center">
          <h1 className="font-bold text-3xl text-primary">Fazzpay</h1>
          <div className="flex space-x-6 items-center">
            <Avatar
              image={`${
                JSON.parse(localStorage.getItem("@userLogin")).profile_image
              }`}
            >
              <li className="p-3 hover:bg-gray-200 cursor-pointer">Profile</li>
              <li className="p-3 hover:bg-gray-200 cursor-pointer">Help</li>
              <hr className="border-t border-gray-600 mt-2" />
              <li className="p-2 mt-3 rounded-lg bg-red-500 text-white text-center cursor-pointer font-bold hover:bg-red-600">
                Logout
              </li>
            </Avatar>
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="text-3xl cursor-pointer">
                <FiBell />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content menu p-2 shadow rounded-box mt-6 border-2 bg-white"
              >
                {data?.map((notif) => {
                  if (notif.tipe === "up") {
                    return (
                      <>
                        <div className="hover:bg-gray-200 flex items-center px-10">
                          <p className="text-3xl text-teal-400">
                            <AiOutlineArrowUp />
                          </p>
                          <div className="notification block w-max p-5">
                            <p className="text-sm">{notif.notes}</p>
                            <p>Rp {notif.nominal}</p>
                          </div>
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <div className="hover:bg-gray-200 flex items-center px-10">
                          <p className="text-3xl text-red-500">
                            <AiOutlineArrowDown />
                          </p>
                          <div className="notification block w-max p-5">
                            <p className="text-sm">{notif.notes}</p>
                            <p>Rp {notif.nominal}</p>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
