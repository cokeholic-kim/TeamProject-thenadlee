
// 1.액션 타입
const SET_REDO = "SET_REDO" ;
const SET_RIGHT = "SET_RIGHT" ;
const SET_LEFT = "SET_LEFT" ;
const SET_RESET = "SET_RESET" ;

// 2.액션 생성함수
export const setRedo = (data) => ({
    type: SET_REDO,
    data    
})
export const setRight = (spotname,nation,lat,lng,img,time) => ({
    type: SET_RIGHT,
    add:{
        spotname,
        nation,
        lat,
        lng,
        img,
        time
    }
})

export const setLeft = (spotname,nation,lat,lng,img,time)=>({
    type:SET_LEFT,    
    add:{
        spotname,
        nation,
        lat,
        lng,
        img,
        time
    }
})

export const setReset = ()=>({
    type:SET_RESET
})

// 3.초기값 생성
export const initialState = {
    left:[],
    right:[]
  };


//  4. 리듀서 생성
export function adds(state=initialState,action){
    switch(action.type){
        case SET_RIGHT:
            const leftadds = state.left.filter(left=> left.spotname !== action.add.spotname)
            return{
                left: leftadds,
                right: state.right.concat(action.add),
            }
        case SET_LEFT:
            const rightadds = state.right.filter(right=> right.spotname !== action.add.spotname)
            return{
                left: state.left.concat(action.add),
                right: rightadds
            } ;
        case SET_RESET:
            return{
                left:[],
                right:[...state.right]
            }
        }
        case SET_REDO:{
            return{
                left:[],
                right:action.data
            }
        }

        // useEffect(()=>{
        //     dispatch(setRedo(data))
        // },[])
        default:
            return state;
    }
}


export default adds;