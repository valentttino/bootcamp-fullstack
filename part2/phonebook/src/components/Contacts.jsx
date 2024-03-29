const Contacts = ({persons=[]}) =>{
    console.log('persons in conntacts:',persons)
    return(
        <div>
            {persons
            .map(x=>
                <div key={x.id}>
                    {x.name} {x.number}
                </div>
            )}
        </div>
    )

}

export default Contacts