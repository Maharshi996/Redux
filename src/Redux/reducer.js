import { INCREMENT,DECREMENT, SHOWDATA } from "./actionTypes";

const initialState = {
    count : 0,
    inputData : {
        data : ""
    }
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case INCREMENT : return {
            ...state,
            count : state.count + 1
        }

        case DECREMENT : return {
            ...state,
            count : state.count -1
        }

        case SHOWDATA : 
        return {
            ...state,
            inputData : {
                data : action.payload.data
            }
            
        }

        default : return state;
    }
}

export default reducer