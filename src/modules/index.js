// root 리듀서 만들기
// rootReducer를 store안으로

import { combineReducers, createStore } from "redux";
import add from "./add";
import logincheck from "./logincheck";


const store =  createStore(reducer)
const rooterReducer = combineReducers({ add ,logincheck }) ;
export default rooterReducer ;
