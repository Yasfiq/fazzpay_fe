"use client";
import TextInput1 from "@/components/atoms/Text Input 1";
import { useEffect, useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";

const FormLogin = () => {
  const [active, setActive] = useState("");
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
    formdata.append("email", email);
    formdata.append("password", password);
    const data = new URLSearchParams(formdata);
    axios
      .post(`https://funpayz.herokuapp.com/api/v1/auth/login`, data)
      .then((result) => {
        localStorage.setItem("@userLogin", JSON.stringify(result.data.Data));
        navigate.push("/confirm-pin");
      })
      .catch((error) => {
        console.log(error.response.data.Error);
        setError(error.response.data.Error);
      });
  };

  return (
    <>
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
        <p
          className="md:text-5xl text-2xl text-gray-400"
          onClick={() => passwordVisible()}
        >
          {active ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </p>
        {error ? (
          <p className="mt-5 text-red-500 font-bold text-xl">{error}</p>
        ) : (
          ""
        )}
      </div>
      {email !== "" && password !== "" ? (
        <button
          className="btn-primary mt-10 w-full"
          onClick={() => handleSubmit()}
        >
          Login
        </button>
      ) : (
        <button className="btn-disabled mt-10 w-full">Login</button>
      )}
    </>
  );
};

export default FormLogin;
