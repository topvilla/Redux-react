import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../optionList/actions';
const OptionList = ({options,dispatch})=>{
    return(
        <div>
            <ul>
            {
                options.map((item)=>{
                    return <li key={item.id}>{item.title}
                    <button onClick={()=>dispatch(actions.actionInit(item))}>selecione</button>
                    </li>
                })
            }
            </ul>
        </div>
    );
}
export default connect(state=>({options:state.options}))(OptionList);