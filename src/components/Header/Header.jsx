import React from "react";
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {

  return (
    <div className="bg-[#b000f2] text-white">
      <div className="flex justify-between py-3 px-6 shadow-md">
        <span>users_like.me</span>
        <span className="flex items-center gap-2">following 1 user <IoIosArrowDown /></span>
      </div>
      <div>
        <p className="pt-5 pb-14 text-2xl">Find new users like you</p>
      </div>
    </div>
  )

}

export default Header