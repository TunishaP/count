import React, { Component } from 'react';
class Counter extends Component {
   render() {
      const {counter,increment,decrement,reset,handleChange} = this.props;
      return (
         <div className="App">
            <div>
               <input type="number" id="num"/>
               <button onClick={handleChange}>Set</button>
            </div>
            <div>{counter}</div>
            <div>
               <button onClick = {increment}>INCREMENT</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT</button>
            </div>
            <button onClick = {reset}>RESET</button>
         </div>
      );
   }
}
export default Counter;
