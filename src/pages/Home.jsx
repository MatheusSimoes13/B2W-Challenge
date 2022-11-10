import React, { useEffect, useState } from "react";
import FollowButton from "../components/Buttons/FollowButton";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import api_client from "../config/api_client";

const Home = () => {

  const [user, setUser] = useState({})

  useEffect(() => {
    api_client.get('https://randomuser.me/api/')
    .then(res => {
      setUser(res.data.results[0])
      // setImage(res.data.results[0].picture.large)
      // setAge(res.data.results[0].dob.age)
      // setNat(res.data.results[0].nat)
    })
    .catch(err => {
      console.log(err)
    })  
  }, [])

  console.log(user)
  return (
    <main>
      <Header />
      <div className="shadow-md p-0.5 -mt-10 px-6">
        <img className="rounded-full inline" src={user.picture.large} alt="userImg" />
        <FollowButton />
        <p>{user.name.first}  {user.name.last}</p>
        <p>{user.location.city},  {user.location.country}</p>
      </div>
      <Card info={'Personal info'} field1={'born at'} answer1={user.nat}
      field2={'age'} answer2={`${user.age} years old`} />
    </main>
  )

}

export default Home