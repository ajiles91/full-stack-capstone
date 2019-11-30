import React from 'react'


const TestContext = React.createContext({
    ideas:
    [
        {
            id: 1, 
            ideaName:'build an ecommerce website', 
            ideaSummary:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
            authorName:'Name 1',
            email:'name1@email.com',
            claimed: true,
            submitted: false
        },

        {
            id: 2,
            ideaName: 'develop a singles matching app',
            ideaSummary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
            authorName: 'Name 2',
            email: 'name2@email.com',
            claimed:false,
            submitted: false
        },
    ]
    
});
export default TestContext

