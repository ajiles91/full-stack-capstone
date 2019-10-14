import React from 'react';

const CreateIdea = (props) => {
    const handleForm = () => {



        
        props.history.push('/ideas')
    }
    return (
        <>
            <h2>Submit a new idea</h2>
            <form onSubmit={handleForm}>
                <input 
                    type='text' 
                    // value={}
                />
                <br />
                <input 
                    type='text' 
                />
                <br />
            <button type='submit'>Add</button>
            </form>
            
        </>
    )
}

export default CreateIdea