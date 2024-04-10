import personService from '../services/persons'

const Contacts = ({persons=[], newFilter='', setPersons}) =>{
    console.log('persons in conntacts:',persons)
    console.log('newFilter in contacts:', newFilter)

    const handleDelete = async (id, name) =>{
        const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`)
        if (confirmDelete){
            try{
                await personService.deletePerson(id)
                setPersons(persons.filter(person => person.id !== id))
                console.log('contact deleted successfully')
            } catch(error){
                console.log('error deleting contact', error)
            }
        }
    }

    return(
        <div>
            {persons
            .filter(x =>{
                return newFilter.toLowerCase() === '' ? x : x.name.toLowerCase().includes(newFilter)
            })
            .map(x=>
                <div key={x.id}>
                {x.name} {x.number} {' '}
                <button onClick={()=> handleDelete(x.id, x.name)}>delete</button>
                </div>
            )}
        </div>
    )

}

export default Contacts