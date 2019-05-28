import React from 'react'
import {connect} from 'react-redux'


const ContentView = ({optionSelected,dispatch})=>{
    return(
        <div>
            <p>{optionSelected}</p>
        </div>
    );
}

export default connect(state=>({optionSelected:state.optionSelected}))(ContentView);