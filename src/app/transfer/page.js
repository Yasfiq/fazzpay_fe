"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuBar from "../home/MenuBar";

const Transfer = () => {
  const [data, setData] = useState();
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://funpayz.herokuapp.com/api/v1/user?search=${query}`)
      .then((res) => {
        setData(res.data.Data);
      })
      .catch((err) => {
        console.log(err.response.data.Error);
      });
  }, [query]);

  return (
    <>
      <Header />
      <div className="container grid grid-cols-12 py-10">
        <MenuBar active="transfer" />
        <div className="col-span-9 h-max shadow-lg p-6 rounded-xl border max-h-screen">
          <h3 className="font-semibold text-xl mb-4">Search Receiver</h3>
          <input
            type="text"
            placeholder={`Search receiver here`}
            className="input w-full border-none bg-gray-100 text-xl mb-6"
            onChange={(e) => setQuery(e.target.value)}
          />
          {data !== undefined
            ? data.map((user) => {
                const id = JSON.parse(localStorage.getItem("@userLogin")).id;
                if (user.id !== id) {
                  return (
                    <>
                      <Link href={`/transfer/${user.id}`}>
                        <div className="flex items-center mb-5">
                          <div
                            className="h-16 w-16 rounded-full bg-center bg-cover bg-no-repeat"
                            style={{
                              backgroundImage: `url("https://res.cloudinary.com/dcf12mtca/image/upload/v1677939306/${user.profile_image}.webp")`,
                            }}
                          ></div>
                          <div className="detail ml-3">
                            <h3>{user.username}</h3>
                            <p className="text-xs">{user.phone_number}</p>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                }
              })
            : ""}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transfer;
