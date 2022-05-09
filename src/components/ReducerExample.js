import React, { useReducer } from "react";

const ReducerExample = () => {

    const reducer = (state, action) => {
        switch(action.type){
            case 'INCREMENT':
                return{count:state.count +1, showText: state.showText}
            case 'toggleShowText':
                return{count: state.count, showText: !state.showText}
            default:
                return state;    
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true
    })

    return(
        <div>
            <h2>Reducer Example</h2>
            <p>{state.count}</p>
            <button onClick={()=>{dispatch({type:'INCREMENT'});
            dispatch({type:'toggleShowText'});
            }} >click</button>
            {state.showText && <p>The reducer is working</p>}
        </div>

    )
}

export default ReducerExample;