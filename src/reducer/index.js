const reducer = (state = 0, action) => {
   const num = document.getElementById("num") ?  parseInt(document.getElementById("num").value)  : 0
    switch (action.type) {
       case 'INCREMENT':
          return state + 1;
       case 'DECREMENT':
          return state - 1;
       case 'RESET': return state === 0;
       case 'SET':
          return num;
    }
 }
 export default reducer;
 