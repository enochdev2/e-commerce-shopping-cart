import React, {  createContext, useReducer, useState, useContext} from "react"
import axios from 'axios';

 export const AppContext = createContext();
 
 
 const ContextProvider = ({children}) => {
   const reducer = (state,action)=> {
        switch (action.type){
          case  'Add':
            const temState = state.filter(item => action.payload.id === item.id)
             if(temState.length < 1){
               return [...state,action.payload]
              }else{
                return state
              }
          case "increase":
              const temState2 = state.map((item)=>{
            if(item.id === action.payload.id){
              return {...item, quantity: item.quantity + 1} 
            }else{
              return item
            }
              })
              return temState2
          case "decrease":
              const temState3 = state.map((item)=>{
            if(item.id === action.payload.id){
              return {...item, quantity: item.quantity - 1} 
            }else{
              return item
            }
              })
              return temState3
          case 'remove':
                 const removeItem = state.filter((item)=> action.payload.id !== item.id)
            return removeItem
          case 'clear':
            return []
        }
   }
  const [state, dispatch] = useReducer(reducer, [])
 const info = {state, dispatch} 
//  console.log(state);
  return (
    <AppContext.Provider value={info}>
      {children}
    </AppContext.Provider>
  )
}
 
export const useGlobal = () =>{
      return useContext(AppContext);
}

export default ContextProvider;


