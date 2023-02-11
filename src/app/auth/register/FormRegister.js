"use client";
import TextInput1 from "@/components/atoms/Text Input 1";
import { useEffect, useState } from "react";
import { BiUser, BiLockAlt } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";

const FormRegister = () => {
  const [active, setActive] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      navigate.push("/confirm-pin");
    }
  }, []);

  const passwordVisible = () => {
    setActive(!active);
  };

  const handleSubmit = () => {
    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    const data = new URLSearchParams(formdata);
    axios
      .post(`http://localhost:3001/api/v1/auth/register`, data)
      .then((res) => {
        axios
          .post(`http://localhost:3001/api/v1/auth/login`, data)
          .then((result) => {
            localStorage.setItem(
              "@userLogin",
              JSON.stringify(result.data.Data)
            );
            navigate.push("/create-pin");
          })
          .catch((error) => {
            console.log(error.response.data.Error);
          });
      })
      .catch((err) => {
        console.log(err.response.data.Error);
        setError(err.response.data.Error);
      });
  };

  return (
    <>
      <TextInput1
        name="username"
        placeholder="Enter your username"
        icons={<BiUser />}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput1
        name="email"
        placeholder="Enter your email"
        icons={<MdOutlineMail />}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div
        className="grid gap-x-5 items-center"
        style={{ gridTemplateColumns: "auto max-content" }}
      >
        <TextInput1
          name="password"
          placeholder="Enter your password"
          type={active ? "text" : "password"}
          icons={<BiLockAlt />}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-5xl text-gray-400" onClick={() => passwordVisible()}>
          {active ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </p>
        {error ? (
          <p className="mt-5 text-red-500 font-bold text-xl">{error}</p>
        ) : (
          ""
        )}
      </div>
      {username !== "" && email !== "" && password !== "" ? (
        <button
          className="btn-primary mt-10 w-full"
          onClick={() => handleSubmit()}
        >
          Sign Up
        </button>
      ) : (
        <button className="btn-disabled mt-10 w-full">Sign Up</button>
      )}
    </>
  );
};

export default FormRegister;
