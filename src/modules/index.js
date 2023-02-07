// root 리듀서 만들기
// rootReducer를 store안으로

import { combineReducers, creatStore } from "redux";
import add from "./add";


// 스토어 생성
const store =  creatStore(rootReducer) ;
const rootReducer = combineReducers({ add : add  }) ;

export default rooterReducer ;
