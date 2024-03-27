import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phoneNumber: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //newName is destined to control the input in the form

  console.log("persons: ", persons)

  const addPerson = (event) =>{
    event.preventDefault()

    const isNameAlreadyAdded = persons.some(persons => persons.name === newName)

    if (!isNameAlreadyAdded){
      const personObject ={
        name: newName,
        phoneNumber: newNumber
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      return(alert(`${newName} is already added to phonebook`))
    }
  }

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
            <input 
              value={newName}
              onChange={handleNameChange} 
            />
          <br />
          number:
            <input
              value={newNumber}
              onChange={handleNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(x=>
      <div key={x.name}>
        {x.name} {x.phoneNumber}
      </div>
      )}
    </div>
  )
}

export default App