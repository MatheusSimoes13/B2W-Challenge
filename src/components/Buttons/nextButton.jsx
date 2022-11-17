import React from "react";

const NextButton = ({
  onClick
}) => {

  return(
    <div className="py-1 border-2 rounded-sm cursor-pointer px-7" onClick={onClick}>
      <p className="text-sm">try the next one</p>
    </div>
  )

}

export default NextButton