import React, { createContext, useEffect, useState } from "react";

export const FollowingContext = createContext([])
export const FollowingProvider = ({ children }) => {

  const [following, setFollowing] = useState([])

  useEffect(() => {
    JSON.parse(localStorage.getItem('following'))
      ? setFollowing(JSON.parse(localStorage.getItem('following')))
      : setFollowing([])
  }, [])

  const state = {
    following,
    setFollowing
  }

  return <FollowingContext.Provider value={state}>{children}</FollowingContext.Provider>

}