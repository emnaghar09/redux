import React from 'react'
import { TODOITEM,TODOLIST} from "./action-type";



const initialState = { 
    text: "",
    list: []
}

export const textReducer = (state= initialState, action) => {
switch (action.type) {
    case TODOITEM: return {

        ...state,text:action.text

       
    } 
    case TODOLIST: 
    return{
        ...state, list:action.list
        // setUserInput(e.currentTarget.value)
    } 


    default: return state

}

}