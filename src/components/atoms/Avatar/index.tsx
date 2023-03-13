import React from "react";

interface LayoutProps {
  children: import("react").ReactNode,
  image: ''
}

const Avatar = (props:LayoutProps) => {
  const { children, image } = props;
  return (
      <>
        <div className="dropdown dropdown-end ml-40">
          <label tabIndex={0} className="cursor-pointer flex space-x-4">
            <div className={`w-16 h-16 rounded-full bg-center bg-cover bg-no-repeat border-2 ${!image && 'animate-pulse'}`} style={image ? {backgroundImage: `url("https://res.cloudinary.com/dcf12mtca/image/upload/v1677939306/${image}.webp")`} : {backgroundColor: '#e5e5e5'} }></div>
            <div className="py-2">
              <h3 className="text-xl">{JSON.parse(localStorage.getItem('@userLogin')).username}</h3>
              <p className="text-sm">{JSON.parse(localStorage.getItem("@userLogin")).phone_number}</p>
            </div>
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow border-2 bg-white rounded-box w-60">
            {children}
          </ul>
        </div>
      </>
    )
};

export default Avatar;
