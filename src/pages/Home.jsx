import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import api_client from "../config/api_client";

const Home = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    api_client.get('https://randomuser.me/api/')
    .then(res => {
      setUser(res.data.results)
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
        <div className="w-full bg-red-600">
          <img className="" src={user[0].picture.large} alt="n"/>
        </div>
        <div>

        </div>
      </div>
    </main>
  )

}

export default Home