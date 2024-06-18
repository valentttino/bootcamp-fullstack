import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () =>{
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) =>{
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const putVote = async (id) => {
    const anecdote = await axios.get(`${baseUrl}/${id}`)
    const updateAnecdote = {...anecdote.data, votes: anecdote.data.votes+1}
    const response = await axios.put(`${baseUrl}/${id}`, updateAnecdote)
    return response.data
}

export default {getAll, createNew, putVote}