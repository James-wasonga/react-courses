import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return{count: state.count+1, showText: state.showText};
    }
    const ReducerTutorial = () => {
        const [state, dispatch] = useReducer(reducer,{count: 0,showText})

    }
    
}
export default reducer;