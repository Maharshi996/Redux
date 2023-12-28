import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { showData } from '../actions'

function InputShower(props) {
    const data = useSelector(state => state.inputData.data)
    const dispatch = useDispatch()

  return (
    <div>
    <h4>Redux Using UseSelector and UseDispatcher Hooks</h4>
    <div id="InputShower">
    <input type="text" placeholder='type here and see right ===> ' onChange={(e)=> dispatch(showData(e.target.value))}/>
    <h3>{data}</h3>
    </div>
    </div>
  )
}

export default InputShower