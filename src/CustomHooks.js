import {useState} from 'react';

const useForm = (callback) => {
    const [inputs, setInputs] = useState({})
    const handleSubmit = (event) => {
        if (event) {
            alert(`Idea Created! Name: ${inputs.ideaName}`);
          // this.setState({isSubmitted:true})
            event.preventDefault();
            ideaDataFromForm(inputs)
            // props.history.push('/ideas')

            // let inputs = {
            //     name:inputs.ideaName,

            // }
            // console.log(inputs)
            
        }
    }
    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({
            ...inputs, [event.target.name]:event.target.value
        }));
    }
    return {
        handleSubmit,
        handleChange,
        inputs
    };
}
export default useForm;