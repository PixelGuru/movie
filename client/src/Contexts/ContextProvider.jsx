/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const [movieInfo, setMovieInfo] = useState(
    JSON.parse(localStorage.getItem("movie_info")) || {}
  );
  useEffect(() => {
    localStorage.setItem("movieInfo", JSON.stringify(movieInfo));
  }, [movieInfo]);

  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken !== null ? storedToken : "";
  });
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);


  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        movieInfo,
        setMovieInfo,
        
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
