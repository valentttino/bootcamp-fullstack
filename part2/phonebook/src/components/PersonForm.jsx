import { useState } from 'react'
import axios from 'axios'

const PersonForm = ({persons = [], setPersons}) =>{
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = event =>{
        event.preventDefault()
    
        const isNameAlreadyAdded = persons.some(persons => persons.name === newName)
    
        if (!isNameAlreadyAdded){
          const personObject ={
            name: newName,
            number: newNumber
          }
          
          axios
            .post('http://localhost:3001/persons', personObject)
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')  
            })
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

    return(
        <div>
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
        </div>
    )
}

export default PersonForm