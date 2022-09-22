import { connect } from 'react-redux'
import Counter from '../component/counter'
import { increment, decrement, reset, handleChange } from '../actions';

const mapStateToProps = (state) => {
   return {
      counter: state
   };
};
const mapDispatchToProps = (dispatch) => {
   // const handleChange = (event) => {
    
   //    let num = parseInt(event.target.value)
   //    // console.log(typeof(num))
   //    // counter(num)
   //  }
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset()),
      handleChange: () => dispatch(handleChange())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
