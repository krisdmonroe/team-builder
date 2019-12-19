import React, {useState} from 'react';
import './App.css';
import Form from "../src/components/Form"
import Members from "../src/components/Members"

function App() {
  const [members, setMembers] = useState([
    {
      name: "Kris",
      email: "nunya@gmail.com",
      role: "badass"
    }
  ])

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.name,
      role: member.role
    }
    setMembers([...members, newMember])
  };




  return (
    <div className="App">
      <Form addNewMember={addNewMember}/>
      <Members members={members}/>
    </div>
  );
}

export default App;
