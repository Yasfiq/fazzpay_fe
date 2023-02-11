"use client";
import { useState } from "react";

const TextInput1 = ({ name, placeholder, type = "text", icons, onChange }) => {
  const [active, setActive] = useState("");

  return (
    <>
      <div className="flex items-center mb-5">
        <label
          htmlFor={name}
          className={`text-5xl ${
            active !== "" ? "text-primary" : "text-gray-400"
          }`}
        >
          {icons}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`ml-4 w-full p-4 border-b-4 text-xl focus:outline-none ${
            active !== "" && "border-primary"
          }`}
          onChange={(e) => {
            setActive(e.target.value);
            onChange(e);
          }}
        />
      </div>
    </>
  );
};

export default TextInput1;
