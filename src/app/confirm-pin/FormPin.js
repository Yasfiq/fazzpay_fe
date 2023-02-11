"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "../create-pin/confirm-pin.module.css";

const FormPin = () => {
  const [pin, setPin] = useState(new Array(6).fill(""));
  let [activePin, setActivePin] = useState(0);
  const inputRef = useRef(null);
  const navigate = useRouter();
  const [error, setError] = useState();

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newPin = [...pin];
    newPin[index] = value.substring(value.length - 1);

    if (!value) setActivePin(index - 1);
    else setActivePin(index + 1);

    setPin(newPin);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activePin]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      activePin = index + 1;
      setActivePin(activePin - 1);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("@userLogin")) {
      navigate.push("/auth/login");
    }
    if (localStorage.getItem("@userLogin")) {
      if (JSON.parse(localStorage.getItem("@userLogin")).pin_number === null) {
        navigate.push("/create-pin");
      }
    }
  }, []);

  const handleSubmit = () => {
    const isPin = pin.join("");
    const data = new URLSearchParams();
    data.append("pin", isPin);
    const id = JSON.parse(localStorage.getItem("@userLogin")).id;
    axios
      .post(`http://localhost:3001/api/v1/user/confirm-pin/${id}`, data)
      .then((res) => {
        const dataUser = JSON.parse(localStorage.getItem("@userLogin"));
        const newData = {
          ...dataUser,
          activePin: true,
        };
        localStorage.removeItem("@userLogin");
        localStorage.setItem("@userLogin", JSON.stringify(newData));
        navigate.push("/home");
      })
      .catch((err) => {
        setError(err.response.data.Error);
      });
  };
  return (
    <>
      <div className="flex space-x-4">
        {pin.map((_, index) => {
          return (
            <div key={index}>
              <input
                type="number"
                ref={index === activePin ? inputRef : null}
                className={`border-2 w-full rounded-xl py-3 text-center focus:outline-primary text-4xl ${styles["input-number"]}`}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                value={pin[index]}
              />
            </div>
          );
        })}
      </div>
      {error ? (
        <p className="mt-5 text-red-500 font-bold text-xl text-center">
          {error}
        </p>
      ) : (
        ""
      )}
      {pin.join("").length === 6 ? (
        <button
          className="btn-primary mt-10 w-full"
          onClick={() => handleSubmit()}
        >
          Confirm
        </button>
      ) : (
        <button className="btn-disabled mt-10 w-full">Confirm</button>
      )}
    </>
  );
};

export default FormPin;
