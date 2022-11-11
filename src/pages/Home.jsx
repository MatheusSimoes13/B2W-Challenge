import React, { useEffect, useState } from "react";
import FollowButton from "../components/Buttons/FollowButton";
import NextButton from "../components/Buttons/nextButton";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import api_client from "../config/api_client";

const Home = () => {

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

  const apiReq = () => {
    api_client.get('https://randomuser.me/api/')
      .then(res => {
        console.log(res)
        setUser(res.data.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <main>
      <Header/>
      <div className={`mx-5 bg-white md:mx-0 md:w-4/5`}>
        <div className="pb-5 shadow-md p-0.5 -mt-12 px-6">
          {user &&
            <div className={`mt-4`}>
              <img className="rounded-full inline" src={user.picture.large} alt="userImg" />
              <div className="flex flex-col items-center">
                <FollowButton />
                <NextButton onClick={() => apiReq()} />
              </div> 
              <p className="text-xl py-1">{user.name.first}  {user.name.last}</p>
              <p className="text-sm py-1"><strong>{user.location.city},  {user.location.country}</strong></p>
            </div>
          }
        </div>
        {user && <Card info={'Personal info'} field1={'born at'} answer1={user.nat}
          field2={'age'} answer2={`${user.dob.age} years old`} />}
        {user && <Card info={'contact info'} field1={'email'} answer1={user.email} field2={'phone 1'} answer2={user.phone} />}
      </div>
    </main>
  )

}

export default Home