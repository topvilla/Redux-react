import {createStore} from 'redux';
const INIT_STATE= {
    optionSelected:"",
    options:[
        {id:1,title:"buscar dados no banco"},
        {id:2,title:"calcular total"},
        {id:3,title:"Exibir content"},
        {id:4,title:"Realizar teste"},
        {id:5,title:"Refatorar cod"},

    ]
}
function reducer(state = INIT_STATE,action){
    if(action.type === "SELECTED_OPTION"){
        return {
            ...state,optionSelected:action.item.title
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;