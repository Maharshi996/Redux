import React from 'react'
import { connect } from 'react-redux'
import { increment,decrement } from '../actions'

function Counter(props) {
  return (
    <div>
    <h4>Redux Using mapStateToProps, mapDispatchToProps, Connect</h4>
    <div id="HomeDiv">
        <input type="button" value="Increment" onClick={props.increment}/>
        <h1>{props.count}</h1>
        <input type="button" value="Decrement" onClick={props.decrement}/>
    </div>
    </div>
  )
}

function mapStateToProps(state){
    return {
       count : state.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        increment : ()=> dispatch(increment()),
        decrement : ()=> dispatch(decrement())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Counter)