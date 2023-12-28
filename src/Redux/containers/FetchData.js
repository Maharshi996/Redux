import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../actions'

function FetchData() {
    const data = useSelector(state => state.fetchedData.data)
    const dispatch = useDispatch()
  return (
    <div>
    <h4>Using Async Actions In Redux By Using Redux-thunk Middleware</h4>
         <div id="fetchData">
        <button onClick = {()=>dispatch(fetchData())}>Fetch Data</button>
        <div id="dataContainer">
        { data.length > 0 ? data.map(item =>{
            return <h6>{item.name}</h6>
        }):<span>Click Button to Fire API</span>
        }
        </div>
        
    </div>
    </div>
   
  )
}

export default FetchData