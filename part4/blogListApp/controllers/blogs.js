const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.get('/:id', async (request, response) => {
  const blogInd = await Blog.findById(request.params.id)
  if (blogInd) response.json(blogInd)
})
  
blogsRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)
  
  blog
    .save()
    .then(result => {
        response.status(201).json(result)
  })
})

  module.exports = blogsRouter