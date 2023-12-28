import { INCREMENT,DECREMENT,SHOWDATA } from "./actionTypes"

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

export {increment,decrement,showData}