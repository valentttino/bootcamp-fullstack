const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const password = process.argv[2]
const mongoUrl = `mongodb+srv://vgboggio:${password}@cluster0.6rfhfc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())


app.get('/helloworld', (req,res) =>{
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello world!')
})

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})