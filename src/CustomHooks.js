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

// const IdeaDetails = ({dummyIdeas =[]}) => {
//     const ideasContext = React.useContext(FormContext);
//     let index = props.match.params.id - 1
//     const data = props.dummyIdeas[index]
//     const [claimed,setClaimed] = useState(data.claimed)

// const IdeaDetails = ({ match, dummyIdeas }) => {
//     const ideasContext = React.useContext(FormContext);
//     let index = match.params.id - 1
//     const data = dummyIdeas[index]
//     const [claimed,setClaimed] = useState(data.claimed)