
import React,{ useReducer, createContext } from "react";
import contextReducer from "./contextReducer";


const initialState=[];

export const  ExpenseTrackerContext=createContext(initialState);

  export const Provider=({children})=>{
    

    const[transactions,dispatch ]= useReducer(contextReducer,initialState);
    //transactions ;- ke pass ab contextReducer ki value h jo usne return ki hai

   // console.log(initialState);
   // console.log(transactions);

    // action creator
    const deleteTransection=(id)=>{
        dispatch({type:"deleteone",payload:id});
    }

    const addTransaction=(transaction)=>{
        dispatch({type:"addAll",payload:transaction})
    }

    //  console.log(transactions);
     return(
        
         < ExpenseTrackerContext.Provider value={{
             deleteTransection,
             addTransaction,
             transactions,
         }}>
            {children};
         </ ExpenseTrackerContext.Provider>
        
     );
 }