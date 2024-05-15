const { test, after, before } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const assert = require('assert')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
    {
      title: 'First Blog',
      author: 'John Doe',
      url: 'http://example.com/first-blog',
      likes: 5
    },
    {
      title: 'Second Blog',
      author: 'Jane Doe',
      url: 'http://example.com/second-blog',
      likes: 10
    }
  ]

  before(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(initialBlogs)
  })

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('verify property of unique identifier', async () => {
    const response = await api.get('/api/blogs')
    const blogs = response.body
    assert(blogs.length > 0, 'no blogs found')
    const blogId = blogs[0]._id

    const blogResponse = await api.get(`/api/blogs/_${blogId}`)
    assert.strictEqual(response.body._id, blogId)
})

after(async () => {
  await mongoose.connection.close()
})