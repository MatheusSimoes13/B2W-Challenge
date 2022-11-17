import React, { useEffect, useState } from "react";
import FollowButton from "../components/Buttons/FollowButton";
import NextButton from "../components/Buttons/nextButton";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import api_client from "../config/api_client";
import SuggestionCard from "../components/SuggestionCard/SuggestionCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Home = () => {

  const [user, setUser] = useState(null)
  const [localUsers, setLocalUsers] = useState([])

  useEffect(() => {
    apiReq()
  }, [])

  const apiReq = () => {
    api_client.get('')
      .then(res => {
        setUser(res.data.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleNext = () => {
    if (localUsers.length > 4) {
      let array = localUsers
      array.shift()
      array.push(user)
      setLocalUsers(array)
    }
    else {
      setLocalUsers([...localUsers, user])
    }
    localStorage.setItem('users', JSON.stringify(localUsers))
    apiReq()
  }

  return (

    <main>
      <Header />
      <section className="">
        <div className={`mx-5 bg-white md:mx-0 md:mx-20 xl:mx-60`}>
          <div className="pb-5 shadow-md p-0.5 -mt-12 px-6">
            {user &&
              <div className={`mt-4`}>
                <img className="rounded-full inline" src={user.picture.large} alt="userImg" />
                <div className="flex flex-col md:grid md:grid-cols-3 items-center">
                  <div className="col-start-2 md:flex md:justify-center">
                    <FollowButton />
                  </div>
                  <div className="md:flex md:justify-end">
                    <NextButton onClick={() => handleNext()} />
                  </div>
                </div>
                <p className="text-xl py-1">{user.name.first}  {user.name.last}</p>
                <p className="text-sm py-1"><strong>{user.location.city},  {user.location.country}</strong></p>
              </div>
            }
          </div>
          <div className="md:flex md:w-full md:gap-2">
            {user && <Card info={'Personal info'} field1={'born at'} answer1={user.nat}
              field2={'age'} answer2={`${user.dob.age} years old`} />}
            {user && <Card info={'contact info'} field1={'email'} answer1={user.email} field2={'phone 1'} answer2={user.phone} />}
          </div>
          <h1 className="my-2 md:text-start md:font-bold md:text-xl">Suggestion 4you</h1>
        </div>
      </section>
      <div className="flex gap-3 justify-center my-4 md:mx-20 xl:mx-60">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            700: {
              slidesPerView: 3
            },
            1270: {
              slidesPerView: 5
            }
          }}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {localUsers.map(user => (
            <SwiperSlide>
              <SuggestionCard picture={user.picture.thumbnail} firstName={user.name.first}
                lastName={user.name.last} city={user.location.city} country={user.location.country}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main >
  )

}

export default Home