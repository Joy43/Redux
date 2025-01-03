import { store } from "../../store"

const logger =(state)=>(next)=>(action)=>{
 console.group(action.type)
 console.info('next state',store.getState());
  const result = next(action);
  return result;
 
  console.groupEnd();
  return result;


}
export default logger;