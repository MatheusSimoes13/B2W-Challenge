import React from "react";

const NextButton = ({
  onClick
}) => {

  return(
    <div className="py-2 border-2 rounded-sm cursor-pointer px-7" onClick={onClick}>
      <p className="text-xs">try the next one</p>
    </div>
  )

}

export default NextButton