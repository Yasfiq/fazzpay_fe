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
            <div className={`w-16 h-16 rounded-full bg-center bg-cover bg-no-repeat border-2 ${!image && 'animate-pulse'}`} style={image ? {backgroundImage: `url("http://localhost:3001/uploads/${image}")`} : {backgroundColor: '#e5e5e5'} }></div>
            <div className="py-2">
              <h3 className="text-xl">Robert Chandler</h3>
              <p className="text-sm">+62 8139 3877 7946</p>
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
