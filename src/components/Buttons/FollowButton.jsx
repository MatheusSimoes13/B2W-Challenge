import React from "react";

const FollowButton = ({
  following
}) => {

  return (
    <div className={`${following ? 'bg-red-500 px-3 py-1 text-sm' : 'bg-blue-400 px-7 rounded-sm py-1 my-2 w-2/5'} `} >
      <p className="text-white">{following ? 'unfollow' : 'Follow'}</p>
    </div>
  )

}

export default FollowButton