import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const Header = ({
  user
}) => {

  return (
    <div className="bg-[#b000f2] text-white">
      <div className="flex justify-between py-3 px-6 shadow-md">
        <span>users_like.me</span>
        <Dropdown />
      </div>
      <div>
        <p className="pt-5 pb-20 text-2xl">Find new users like you</p>
      </div>
    </div>
  )

}

export default Header