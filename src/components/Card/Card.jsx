import React from "react";

const Card = ({
  info,
  field1,
  field2,
  answer1,
  answer2
}) => {

  return(
    <div className="bg-white shadow-md w-4/5 pl-5 inline-block">
      <p className="justify-start text-start"><strong>{info}</strong></p>
      <div className="flex">
        <p>{field1}:</p><p>{answer1}</p>
      </div>
      <div className="flex">
        <p>{field2}:</p><p>{answer2}</p>
      </div>
    </div>
  )

}

export default Card