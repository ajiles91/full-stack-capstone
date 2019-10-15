import {useState} from 'react';
const useForm = (callback) => {
    const [inputs, setInputs] = useState({})
    const handleSubmit = (event) => {
        if (event) {
            alert(this.state.ideaName  + ` was submitted`);
          // this.setState({isSubmitted:true})
            event.preventDefault();
            // this.props.ideaDataFromForm(this.state)
            // props.history.push('/ideas')
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