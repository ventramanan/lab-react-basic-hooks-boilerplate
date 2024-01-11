import React from 'react'
import {createContext,useState} from "react";

export const Mycontext=createContext();

export default function Context({children}) {
    let[darkTheme,setDarkTheme]=useState(false)
  return (
   <>
   <Mycontext.Provider value={{darkTheme,setDarkTheme}}>
        {children}
   </Mycontext.Provider>


   </>
  )
}
