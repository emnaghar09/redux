import { TODOITEM,  TODOLIST } from "./action-type";

export const todoHandler =(text)=> { 

    return{ type : TODOITEM,
     text:text}

}

export const listHandler = (list) => {
    
    return{
        type: TODOLIST,
         list:list
    }
}