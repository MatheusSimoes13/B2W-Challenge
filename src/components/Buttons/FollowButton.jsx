import React from "react";

const FollowButton = ({
  following
}) => {

  return (
    <div className={`${following ? 'px-3 text-sm cursor-pointer' : 'rounded-sm py-1 my-2 cursor-pointer'} `} >
      <p className={`text-white py-1 rounded-sm w-28 ${following ? 'bg-red-500 px-5' : 'bg-blue-400 px-7'}`}>{following ? 'unfollow' : 'Follow'}</p>
    </div>
  )

}

export default FollowButton