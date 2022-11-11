import React from "react";
import { IoIosArrowDown } from 'react-icons/io'

const Card = ({
  info,
  field1,
  field2,
  answer1,
  answer2
}) => {

  return (

    <div className="bg-white shadow-md w-full md:w-1/2 inline-block my-2">
      <div className="p-6 flex flex-col gap-3">
        <p className="justify-start text-start"><strong>{info}</strong></p>
        <p className="text-sm flex text-start">{field1}: {answer1}</p>
        <p className="text-sm flex">{field2}: {answer2}</p>
      </div>
      <hr />
      <a href="/" className="flex items-center gap-1 text-blue-400 px-6 py-2"><IoIosArrowDown />see more</a>
    </div>

  )

}

export default Card