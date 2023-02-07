
// 1.액션 타입
const SET_PLUS = "SET_PLUS" ;
const SET_DELETE = "SET_DELETE" ;

// 2.액션 생성함수
export const setPlus = (id) => ({
    type: SET_PLUS,
    add: {
        id: id++
    }
    
})

let id = 1
export const setDelete = (id) => ({
    type: SET_DELETE,
    add: {
        id
    }
})

// 3.초기값 생성
export const initialState = {
    adds: [],
  };


//  4. 리듀서 생성
export function adds(state=initialState,action= {}){
    switch(action.type){
        case SET_PLUS:
            return{
                ...state,
                adds: state.adds.concat(action.add),
            }
        case SET_DELETE:
            return{
                ...state,
                adds: state.adds.filter((add) => add.id !== action.id),
            } ;
        default:
            return state;
    }
}


export default adds;