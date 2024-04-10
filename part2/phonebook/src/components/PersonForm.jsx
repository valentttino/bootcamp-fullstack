import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({persons = [], setPersons}) =>{
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = event =>{
        event.preventDefault()
    
        const isNameAlreadyAdded = persons.some(persons => persons.name === newName)
    
        if (!isNameAlreadyAdded){
          const personObject ={name: newName, number: newNumber}
          
          personService
            .create(personObject)
            .then(response =>{
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
            })
        } else {
          const replaceNumberConfirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
          if (replaceNumberConfirm){
            const personObject ={name: newName, number: newNumber}

            const findIdContact = () => {
                const foundContact = persons.find(person => person.name === newName)
                return foundContact ? foundContact.id : null 
            }
        
            const id = findIdContact()

            personService
                .update(id, personObject)
                .then(response =>{
                    setPersons(persons.map(person => person.id !== id ? person : response.data))
                    setNewName('')
                    setNewNumber('')
                })
            }
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