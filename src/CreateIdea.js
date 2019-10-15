import React from 'react';
import useForm from './CustomHooks'
const CreateIdea = () => {
    

    // handleForm = (event) => {
    //     alert(this.state.ideaName  + ` was submitted`);
    //     this.setState({isSubmitted:true})
    //     event.preventDefault();
    //     this.props.ideaDataFromForm(this.state)
    //     // props.history.push('/ideas')
    // }

    // handleChange = (event) => {
    //     const {name, value} = event.target;
    //     this.setState({
    //       [name]: value
    //     });
    // }
    const {inputs, handleChange, handleSubmit} = useForm();
    
    return (
        <>
            <h2>Submit a new idea</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="idea-name">Idea Name</label>
                <input 
                    type="text"
                    value={inputs.ideaName} 
                    onChange={handleChange}
                    name="ideaName"
                    required 
                />
        

                <label htmlFor="idea-summary">Idea Summary</label>
                <textarea 
                    value={inputs.ideaSummary}  
                    rows="10"
                    onChange={handleChange}
                    name="ideaSummary"
                    required 
                />
        

                <label htmlFor="contact-info">Author Name</label>
                <input 
                    type="text" 
                    name="authorName"
                    value={inputs.authorName}
                    onChange={handleChange} 
                    required 
                />
            

                <label htmlFor="contact-info">Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={inputs.email} 
                    onChange={handleChange} 
                    required 
                />
            
                <button type='submit'>Add</button>
            </form>
            
        </>
    )
}


export default CreateIdea