import React from 'react'

const FormContext = React.createContext({
    ideaName: '',
    ideaSummary: ' ',
    authorName: ' ',
    email: ' ',
    isClaimed: false
    //how to get info submitted from createIdea component in here
});
export default FormContext;