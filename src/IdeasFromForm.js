import React, { Component} from 'react';
import FormContext from './FormContext';
// import { Link } from 'react-router-dom'

class IdeasFromForm extends Component {
    static contextType = FormContext
    render(){
        // let formData = this.context.state
        console.log(this.context.state)
        // console.log(formData)
        // const list = formData.map(formData=> (
        //     <>
        //         <li>
        //             {/* <span>Id: {idea.id}</span>{' '}
        //             <span>Name: </span> */}
        //             {this.context.state.ideaName}
        //             <Link to={`/idea/${this.context.state.id}`}>{this.context.state.ideaName}</Link>
        //         </li>
                
        //     </>
        // ))
        return (
            <div>
                <ul>
                    <p>stuff</p>
                    {/* <p>{this.context.state.ideaName}</p> */}
                </ul>
            </div>
        )
    }
}

export default IdeasFromForm;