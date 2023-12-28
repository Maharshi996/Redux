import { INCREMENT,DECREMENT,SHOWDATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from "./actionTypes"
import axios from "axios"

const increment = ()=>{
    return {
        type : INCREMENT,
        payload : {}
    }
}

const decrement = ()=>{
    return {
        type : DECREMENT,
        payload : {}
    }
}

const showData = (data)=>{
    return {
        type : SHOWDATA,
        payload : {
            data : data
        }
    }

}

const fetchDataSuccess = (data,status)=>{
    return {
        type : FETCH_DATA_SUCCESS,
        payload : {
            status : status,
            data: data

        }
    }
}

const fetchDataFailed = (error)=>{
    return {
        type : FETCH_DATA_FAILED,
        payload : {
            status : error,
            data: []
        } 
    }
}

const fetchData = ()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            dispatch(fetchDataSuccess(response.data,response.status))
        })
        .catch(error =>{
            dispatch(fetchDataFailed(error.message))
        })

    }
}

export {increment,decrement,showData,fetchData}