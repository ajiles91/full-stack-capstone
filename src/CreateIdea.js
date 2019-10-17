import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormContext from './FormContext';
// import './CreateIdea.css';
// const uuidv1 = require('uuid/v1');

class CreateIdea extends Component {
    static contextType = FormContext;
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }  
    
    state = {
        isSubmitted: false,
        ideaName: '',
        ideaSummary: '',
        authorName:'',
        email: ''
    }

    

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
          [name]: value
        });
    }

    

    handleSubmit(event) {
        alert(this.state.ideaName  + ` was submitted`);
        this.setState({
            claimed: true
            // id: uuidv1()
        })
        event.preventDefault();
   
        this.props.ideaDataFromForm(this.state)
    }

    render() {
        console.log()
      return (
        <div className='CreateIdeaApp'>
          <main role="main">
              <Link to='/'>
              <button> to idea page
                </button>

                </Link>
                <header>
                    <h1>New Idea</h1>
                </header>

                <section>
                        <form id="submit-idea" onSubmit={this.handleSubmit}>

                            <div className="form-section">
                                <label htmlFor="idea-name">Idea Name</label>
                                <input 
                                    type="text"
                                    value={this.state.ideaName} 
                                    onChange={this.handleChange}
                                    name="ideaName"
                                required 
                                />
                            </div>

                            <div className="form-section">
                                <label htmlFor="idea-summary">Idea Summary</label>
                                <textarea 
                                    value={this.state.ideaSummary}  
                                    rows="15"
                                    onChange={this.handleChange}
                                    name="ideaSummary"
                                    required 
                                />
                            </div>

                            <div className="author-name-container form-section">
                                <label htmlFor="contact-info">Author Name</label>
                                <input 
                                    type="text" 
                                    name="authorName"
                                    value={this.state.authorName}
                                    onChange={this.handleChange} 
                                    required 
                                />
                            </div>

                            <div className="contact-info-container form-section">
                                <label htmlFor="contact-info">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={this.state.email} 
                                    onChange={this.handleChange} 
                                    required 
                                />
                            </div>
                            
                            <button type="submit">Submit</button>
                            
                            {/* <Link to ="/idea-list">
                            <button>to Idea List</button>
                            </Link> */}
                           
                        </form>
                </section>
            </main>
        </div>
      );
    }
}
CreateIdea.contextType = FormContext;
export default CreateIdea;





// import React from 'react';
// import useForm from './CustomHooks'




// // export const [ideaName, useIdeaName] = React.createContext(inputs.ideaName)
// const CreateIdea = () => {
   

    
//     const {inputs, handleChange, handleSubmit} = useForm();
//     // const [ideaName, setIdeaName] = useState(inputs.ideaName)
//     // const FormSubmit = React.createContext(state)
    
//     return (
//         <>
//             <h2>Submit a new idea</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="idea-name">Idea Name</label>
//                 <input 
//                     type="text"
//                     value={inputs.ideaName} 
//                     onChange={handleChange}
//                     name="ideaName"
//                     required 
//                 />
        

//                 <label htmlFor="idea-summary">Idea Summary</label>
//                 <textarea 
//                     value={inputs.ideaSummary}  
//                     rows="10"
//                     onChange={handleChange}
//                     name="ideaSummary"
//                     required 
//                 />
        

//                 <label htmlFor="contact-info">Author Name</label>
//                 <input 
//                     type="text" 
//                     name="authorName"
//                     value={inputs.authorName}
//                     onChange={handleChange} 
//                     required 
//                 />
            

//                 <label htmlFor="contact-info">Email</label>
//                 <input 
//                     type="email" 
//                     name="email"
//                     value={inputs.email} 
//                     onChange={handleChange} 
//                     required 
//                 />
            
//                 <button type='submit'>Add</button>
//             </form>
            
//         </>
//     )
// }


// export default CreateIdea







