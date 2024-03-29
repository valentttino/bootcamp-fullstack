import { useState } from 'react'

const Filter = () =>{
    const [newFilter, setFilter] = useState('')
    console.log(newFilter)
    return(
        <div>
            <form onChange={e => setFilter(e.target.value)}>
                filter shown with
                <input />
            </form>
        </div>
    )
}

export default Filter