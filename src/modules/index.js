// root 리듀서 만들기
// rootReducer를 store안으로

import { combineReducers, createStore } from "redux";
import add from "./add";


const store =  createStore(reducer)
const rooterReducer = combineReducers({ add : add  }) ;
export default rooterReducer ;
