import localVariables from "../../config/localVariables"

export const initialState={
    isAuthenticated:!!localStorage.getItem(localVariables.ACCESS_TOKEN),
}

export const LOGOUT='LOGIN/LOGOUT';


export const logOut =()=>dispatch=>{
    localStorage.removeItem(localVariables.ACCESS_TOKEN)
    dispatch({
        type:LOGOUT
    })
}




export default function LoginReducer(state=initialState,{type,payload}){
    switch(type){
          
            case LOGOUT:
                return{
                    ...state,
                    isAuthenticated:false,
                }                                
        default:
        return state;
    }
}