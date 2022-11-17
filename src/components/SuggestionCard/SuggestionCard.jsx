import React from "react";
import FollowButton from '../Buttons/FollowButton'

const SuggestionCard = ({
  picture,
  firstName,
  lastName,
  city,
  country
}) => {

  return (
    <div className="border-2 flex flex-col text-center justify-center py-6">
      <div className="flex justify-center">
        <img className="rounded-full h-14 w-14" src={picture} alt="userPic" />
      </div>
      <h1>{firstName} {lastName}</h1>
      <p className="text-xs text-[#A9A9A9]">{city}, {country}</p>
      <div className="flex justify-center">
        <FollowButton />
      </div>
    </div>
  )

}

export default SuggestionCard