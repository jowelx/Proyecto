//proveedor del context, variables, informacion que maneja el context
import UserContext from './context'
import { useState,useEffect,useMemo,useContext } from 'react';
export const DataProvider =(props)=>{
   const route = 'http://localhost:5000'
    const url ='http://localhost:5000/user';
    const [user,setUserC]=useState([]);
    const [ADMcomments,setADMcomments]=useState()
    const fetchApi = async() =>{
      const response = await fetch(url);
      
      const responseJSON = await response.json();
      setUserC(responseJSON);
      console.log(responseJSON)
    }
    useEffect(()=>{
      fetchApi()
    },[])
    const valueUser = useMemo(()=>{
      return({user,
              setUserC,
              ADMcomments,
              setADMcomments
      })
    },[user])
    return <UserContext.Provider value={valueUser} {...props}/>

}
export function useUser(){
const context = useContext(UserContext)
return context
}
