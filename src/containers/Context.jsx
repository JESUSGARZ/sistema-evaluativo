import React from 'react'
import useData from '../hooks/useData.js'
import {  createContext } from "react";
export const AppContext= createContext({});



const ContextProvider =({children}) => {
  const dataFromApi = useData('./data.json');




    return (

        <AppContext.Provider value={dataFromApi}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;