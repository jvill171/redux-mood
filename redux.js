const INITIAL_STATE = { mood: "┐(･-･)┌" }

const moodReducer = ( state = INITIAL_STATE, action )=>{
    switch(action.type){
        case "happy":
            return {...state, mood: "(≧▽≦)/" }
        case "sad":
            return {...state, mood: "(ㄒoㄒ)" }
        case "angry":
            return {...state, mood: "(╬◣д◢)" }
        case "confused":
            return {...state, mood: "(。ヘ°)" }
        case "reset":
            return {...state, ...INITIAL_STATE }
        default:
            return state;
    }
}


const store = Redux.createStore(
    moodReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


