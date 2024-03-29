const Contacts = ({persons=[], newFilter=''}) =>{
    console.log('persons in conntacts:',persons)
    console.log('newFilter in contacts:', newFilter);
    return(
        <div>
            {persons
            .filter(x =>{
                return newFilter.toLowerCase() === '' ? x : x.name.toLowerCase().includes(newFilter)
            })
            .map(x=>
                <div key={x.id}>
                {x.name} {x.number}
                </div>
            )}
        </div>
    )

}

export default Contacts