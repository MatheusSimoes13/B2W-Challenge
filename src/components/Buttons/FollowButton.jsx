import React from "react";

const FollowButton = ({
  following
}) => {

  return (
    <div className={`${following ? 'bg-red-500 px-3 py-1 text-sm cursor-pointer' : ' px-7 rounded-sm py-1 my-2  cursor-pointer'} `} >
      <p className="text-white bg-blue-400 py-1 rounded-sm px-7">{following ? 'unfollow' : 'Follow'}</p>
    </div>
  )

}

export default FollowButton