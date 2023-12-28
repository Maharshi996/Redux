import { INCREMENT,DECREMENT, SHOWDATA, FETCH_DATA_SUCCESS,FETCH_DATA_FAILED } from "./actionTypes";

const initialState = {
    count : 0,
    inputData : {
        data : ""
    },
    fetchedData : {
        message : "",
        data : []
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

        case FETCH_DATA_SUCCESS :
            return{
                ...state,
                fetchedData : {
                    status : action.payload.status,
                    data : action.payload.data
                }
            }

            case FETCH_DATA_FAILED :
                return{
                    ...state,
                    fetchedData : {
                        status : action.payload.status,
                        data : action.payload.data
                    }
                }

        default : return state;
    }
}

export default reducer