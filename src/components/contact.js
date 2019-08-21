import React, {useState} from 'react'

const ContactForm = () => {

    const [info, setInfo] = useState({name:'', email: '', notes:''})

    return (
        <form>
            <label>Name</label>
            <input
            type= 'text'
            name= 'name'
            />
            <label>Email:</label>
            <input
            type='email'
            name='email'
            />
            <label>Notes:</label>
            <input 
            type='text'
            name='notes'
            />
            <button>Send</button>
        </form>
    )
}

export default ContactForm;