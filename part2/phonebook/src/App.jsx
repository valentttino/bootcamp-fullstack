import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Contacts from './components/Contacts'
import axios from 'axios'


// create the components: Filter - PersonForm - Contacts

/* const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [newFilter, setFilter] = useState('')

  console.log("persons: ", persons)
  console.log("filter:", newFilter);

  const addPerson = (event) =>{
    event.preventDefault()

    const isNameAlreadyAdded = persons.some(persons => persons.name === newName)

    if (!isNameAlreadyAdded){
      const personObject ={
        name: newName,
        phoneNumber: newNumber,
        id: persons.length+1
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
      <form onChange={e => setFilter(e.target.value)}>
          filter shown with
          <input />
      </form>
      <h2>add a new</h2>
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
      {persons
      .filter(x =>{
        return newFilter.toLowerCase() === '' ? x : x.name.toLowerCase().includes(newFilter)
      })
      .map(x=>
        <div key={x.id}>
          {x.name} {x.phoneNumber}
        </div>
      )}
    </div>
  )
}
 */


const App = () =>{
  const [persons, setPersons] = useState([])

  useEffect( () => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])

  console.log('render', persons.length, 'contacts')

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter />

      <h3>Add a new</h3>

      <PersonForm persons={persons}
        setPersons={setPersons}
      />

      <h3>Numbers</h3>

      <Contacts persons={persons}/>
    </div>
  )
}
export default App