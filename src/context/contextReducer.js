const contextReducer=(state,action)=>{
     let gopal;
      switch(action.type){
          case "deleteone":
              gopal=state.filter((t)=>t.id != action.payload);// ye samajna hai   
            return gopal;
          case "addAll":
              gopal=[action.payload, ...state]; 
              return gopal;
              
         default:
             return state;
      }
};

export default contextReducer;