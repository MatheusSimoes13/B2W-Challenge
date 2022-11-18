import React, { useContext, useState } from "react";
import { IoIosArrowDown } from 'react-icons/io'
import { GrFormClose } from 'react-icons/gr'
import FollowButton from '../Buttons/FollowButton'
import { FollowingContext } from "../../contexts/following";

const Dropdown = () => {

  const { following, setFollowing } = useContext(FollowingContext)

  const [isOpen, setIsOpen] = useState()

  const handleRemove = (id) => {
    let remove = following
    remove.splice(id,1)
    setFollowing(remove)
  }

  return (
    <div className="z-20">
      <span onClick={() => setIsOpen(true)} className={isOpen ? '' : `flex items-center gap-2 cursor-pointer`}>following {following.length} users <IoIosArrowDown /></span>
      <div className={isOpen ? 'animate-showUl w-full bg-white p-2 absolute top-0 right-0 md:w-3/5 lg:w-2/5 md:mr-16 md:mt-3' : ' hidden'}>
        <span className="justify-end text-black font-bold text-sm flex items-center gap-2 text-[#A020F0] cursor-pointer">following {following.length} users <GrFormClose className="text-2xl" onClick={() => setIsOpen(false)} /></span>
        <hr />
        <ul className="bg-white flex flex-col gap-4 p-2 ">
          {following?.map((user, id) => (
            <li key={user.name.first} className="flex items-center gap-3 pt-2 justify-between">
              <div className="flex items-center gap-3">
                {user && <img className="rounded-full" src={user.picture.thumbnail} alt="userImg" />}
                {user &&
                  <div className="item-center justify-start text-start">
                    <p className="text-black text-sm">{user.name.first} {user.name.last}</p>
                    <p className="text-black text-xs">{user.location.city}, {user.location.country}</p>
                  </div>
                }
              </div>
              <FollowButton following={true} onClick={() => handleRemove(id)}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

}

export default Dropdown