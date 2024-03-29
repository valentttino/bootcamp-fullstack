import { useState } from 'react'
import Contacts from './Contacts'

const Filter = () =>{
    const [newFilter, setFilter] = useState('')
    console.log(newFilter)
    return(
        <div>
            <form onChange={e => setFilter(e.target.value)}>
                filter shown with
                <input />
            </form>
            {<Contacts newFilter={newFilter} />}
        </div>
    )
}

export default Filter