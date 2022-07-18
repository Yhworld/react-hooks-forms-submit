import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [nameData, setNameData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault()
    const formData = {firstName, lastName}
    const getThat = [...nameData, formData]
    setNameData(getThat);
    setFirstName("");
    setLastName("");
  }
  const fetchData = nameData.map((data) => {
    return (
      <div>
        <span style={{ color: "green" }}>{data.firstName} {data.lastName}</span>
      </div>
    )
  })
  return (
  <div>
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    <h1>headerrrrr!!!!!</h1>
    {fetchData}
  </div>
  );
}

export default Form;
