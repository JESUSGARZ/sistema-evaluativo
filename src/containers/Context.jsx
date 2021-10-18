import React from 'react'
import useData from '../hooks/useData.js'
import {  createContext } from "react";
export const AppContext= createContext({});
import {data} from './data.json'



const ContextProvider =({children}) => {
  const dataFromApi = data;




    return (

        <AppContext.Provider value={dataFromApi}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;