import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from 'react-icons/io'
import { GrFormClose } from 'react-icons/gr'
import api_client from "../../config/api_client";
import FollowButton from '../Buttons/FollowButton'

const Dropdown = () => {

  const [isOpen, setIsOpen] = useState()
  const [user, setUser] = useState(null)

  useEffect(() => {
    api_client.get('https://randomuser.me/api/')
      .then(res => {
        setUser(res.data.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <span onClick={() => setIsOpen(true)} className={isOpen ? 'hidden' : `flex items-center gap-2`}>following 5 users <IoIosArrowDown /></span>
      <div className={isOpen ? 'animate-showUl w-full bg-white p-2 absolute top-0 right-0' : 'hidden'}>
        <span className="justify-end text-black font-bold text-sm flex items-center gap-2 text-[#A020F0]">following 5 users <GrFormClose className="text-2xl" onClick={() => setIsOpen(false)} /></span>
        <hr />
        <ul className="bg-white flex flex-col gap-4 p-2 ">
          <li className="flex items-center gap-3 pt-2 justify-between">
            <div className="flex items-center gap-3">
              {user && <img className="rounded-full" src={user.picture.thumbnail} alt="userImg" />}
              {user &&
                <div className="item-center justify-start text-start">
                  <p className="text-black text-sm">{user.name.first} {user.name.last}</p>
                  <p className="text-black text-xs">{user.location.city}, {user.location.country}</p>
                </div>
              }
            </div>
            <FollowButton following={true} />
          </li>
          <li className="flex items-center gap-3 pt-2 justify-between">
            <div className="flex items-center gap-3">
              {user && <img className="rounded-full" src={user.picture.thumbnail} alt="userImg" />}
              {user &&
                <div className="item-center justify-start text-start">
                  <p className="text-black text-sm">{user.name.first} {user.name.last}</p>
                  <p className="text-black text-xs">{user.location.city}, {user.location.country}</p>
                </div>
              }
            </div>
            <FollowButton following={true} />
          </li>
          <li className="flex items-center gap-3 pt-2 justify-between">
            <div className="flex items-center gap-3">
              {user && <img className="rounded-full" src={user.picture.thumbnail} alt="userImg" />}
              {user &&
                <div className="item-center justify-start text-start">
                  <p className="text-black text-sm">{user.name.first} {user.name.last}</p>
                  <p className="text-black text-xs">{user.location.city}, {user.location.country}</p>
                </div>
              }
            </div>
            <FollowButton following={true} />
          </li>
        </ul>
      </div>

    </div>
  )

}

export default Dropdown