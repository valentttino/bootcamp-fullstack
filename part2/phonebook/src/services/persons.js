import axios from 'axios'

//const pUrl = 'http://localhost:3001/persons'
const pUrl = '/api/persons'


const getAll = () => axios.get(pUrl)

const create = newObject => axios.post(pUrl, newObject)

const update = (id, newObject) => axios.put(`${pUrl}/${id}`, newObject)

const deletePerson = id => axios.delete(`${pUrl}/${id}`)

export default {getAll, create, update, deletePerson}

