
// 1.액션 타입
const SET_PLUS = "SET_PLUS" ;
const SET_DELETE = "SET_DELETE" ;
const SET_RESET = "SET_RESET" ;

// 2.액션 생성함수
export const setPlus = (spotname,nation, lat, lng,img,time) => ({
    type: SET_PLUS,
    add: {
        spotname,
        nation,
        lat,
        lng,
        img,
        time,
    }    
})
export const setDelete = (spotname) => ({
    type: SET_DELETE,
    spotname
})

export const setReset = ()=>({
    type:SET_RESET
})

// 3.초기값 생성
export const initialState = {
    adds: [],
  };


//  4. 리듀서 생성
export function adds(state=initialState,action){
    switch(action.type){
        case SET_PLUS:
            return{
                adds: state.adds.concat(action.add),
            }
        case SET_DELETE:
            const adds = state.adds.filter(add=> add.spotname !== action.spotname)
            return{
                adds: adds
            } ;
        case SET_RESET:{
            return{
                adds:[]
            }
        }
        default:
            return state;
    }
}


export default adds;