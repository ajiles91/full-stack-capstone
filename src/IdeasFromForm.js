import React, { Component} from 'react';
import FormContext from './FormContext';
// import { Link } from 'react-router-dom'

class IdeasFromForm extends Component {
    static contextType = FormContext

    
    render(){
        console.log(this.context)
        // const list = context.map(context=> (
        //     <>
        //     <li>
        //         {/* <span>Id: {idea.id}</span>{' '}
        //         <span>Name: </span> */}
        //         {this.context.name}
        //     </li>
                
        //     </>
        // ))
    return(
        <div>
            <ul>
                <p>stuff</p>
            </ul>
        </div>
    )
    }
}

export default IdeasFromForm;