import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState ({
    name:"",
    email:"",
    role:""
});

const handleChanges = e => {
    setMember({...member,[e.target.name]: e.target.value});
}

const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member)
    setMember({
        name:"",
        email:"",
        role:""
    })
};

return (
    <form onSubmit={submitForm}>
        <label htmlFor="name"> Name </label>
            <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChanges}
            value={member.name}
        />
           <br/>
        <label htmlFor="email"> Email </label>
            <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChanges}
            value={member.email}
        />  
        <br/>
        <label htmlFor="role"> Role</label>
            <input
            id="role"
            name="role"
            type="text"
            placeholder="Role"
            onChange={handleChanges}
            value={member.role}
        />
        <br/>
        <button type="submit">Add Member</button>
        </form>
    );
};
export default Form;